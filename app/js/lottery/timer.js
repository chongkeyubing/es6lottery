class Timer{
  //计时方法，end为结束时间，updata为更新函数，handle为结束处理函数
  countdown(end,update,handle){
    const now=new Date().getTime();
    const self=this;
    //如果当前时间大于结束时间，说明倒计时结束，直接执行结束处理函数
    if(now-end>0){
      handle.call(self);
    }else{
      //剩余时间
      let last_time=end-now;
      //天，小时，分钟，秒的毫秒数
      const px_d=1000*60*60*24;
      const px_h=1000*60*60;
      const px_m=1000*60;
      const px_s=1000;

      //剩余天数、小时，分钟、秒
      let d=Math.floor(last_time/px_d);
      let h=Math.floor((last_time-d*px_d)/px_h);
      let m=Math.floor((last_time-d*px_d-h*px_h)/px_m);
      let s=Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s);
      let r=[];
      if(d>0){
        r.push(`<em>${d}</em>天`);
      }
      if(r.length||(h>0)){
        r.push(`<em>${h}</em>时`);
      }
      if(r.length||m>0){
        r.push(`<em>${m}</em>分`);
      }
      if(r.length||s>0){
        r.push(`<em>${s}</em>秒`);
      }
      //从数组创建字符串
      self.last_time=r.join('');
      update.call(self,r.join(''));
      setTimeout(function () {
        self.countdown(end,update,handle);
      }, 1000);
    }
  }
}

export default Timer


//更通用
/*
class Timer{
  //计时方法，end为结束时间，updata为更新函数，handle为结束处理函数
  countdown(end,update,handle){
    const now=new Date().getTime();
    const self=this;
    //如果当前时间大于结束时间，说明倒计时结束，直接执行结束处理函数
    if(now-end>0){
      handle.call(self);
    }else{
      //剩余时间
      let last_time=end-now;
      //天，小时，分钟，秒的毫秒数
      const px_d=1000*60*60*24;
      const px_h=1000*60*60;
      const px_m=1000*60;
      const px_s=1000;

      //剩余天数、小时，分钟、秒
      let day=Math.floor(last_time/px_d);
      let hour=Math.floor((last_time-day*px_d)/px_h);
      let min=Math.floor((last_time-day*px_d-hour*px_h)/px_m);
      let second=Math.floor((last_time-day*px_d-hour*px_h-min*px_m)/px_s);

      update.call(self, {day,hour,min,second});
      
      setTimeout(function () {
        self.countdown(end,update,handle);
      }, 1000);
    }
  }
}

new Timer().countdown(new Date("5 14,2017 17:30:00"),function(last){console.log(last.second)});


 */