"use strict";
var common_vendor = require("../../../../../../common/vendor.js");
var util = {};
util.getTargetTimezone = function(val) {
  if (typeof val === "number") {
    return val;
  }
  let vk = common_vendor.index.vk;
  let defaultValue = 8;
  let targetTimezone = defaultValue;
  try {
    const config = vk.callFunctionUtil.getConfig();
    targetTimezone = config.targetTimezone;
    if (typeof targetTimezone !== "number") {
      targetTimezone = defaultValue;
    }
  } catch (err) {
  }
  return targetTimezone;
};
util.timeFormat = function(time, fmt = "yyyy-MM-dd hh:mm:ss", targetTimezone) {
  try {
    targetTimezone = util.getTargetTimezone(targetTimezone);
    if (!time) {
      return "";
    }
    if (typeof time === "string" && !isNaN(time))
      time = Number(time);
    let date;
    if (typeof time === "number") {
      if (time.toString().length == 10)
        time *= 1e3;
      date = new Date(time);
    } else {
      date = time;
    }
    const dif = date.getTimezoneOffset();
    const timeDif = dif * 60 * 1e3 + targetTimezone * 60 * 60 * 1e3;
    const east8time = date.getTime() + timeDif;
    date = new Date(east8time);
    let opt = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
      "q+": Math.floor((date.getMonth() + 3) / 3),
      "S": date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in opt) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? opt[k] : ("00" + opt[k]).substr(("" + opt[k]).length));
      }
    }
    return fmt;
  } catch (err) {
    return time;
  }
};
util.getFullTime = function(date, type = 0, targetTimezone) {
  if (!date) {
    return "";
  }
  targetTimezone = util.getTargetTimezone(targetTimezone);
  if (typeof date === "string" && !isNaN(date))
    date = Number(date);
  if (typeof date == "number") {
    if (date.toString().length == 10)
      date *= 1e3;
    date = new Date(date);
  }
  const dif = date.getTimezoneOffset();
  const timeDif = dif * 60 * 1e3 + targetTimezone * 60 * 60 * 1e3;
  const east8time = date.getTime() + timeDif;
  date = new Date(east8time);
  let YYYY = date.getFullYear() + "";
  let MM = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  let DD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  if (type === 2) {
    return {
      YYYY: Number(YYYY),
      MM: Number(MM),
      DD: Number(DD),
      hh: Number(hh),
      mm: Number(mm),
      ss: Number(ss),
      year: Number(YYYY),
      month: Number(MM),
      day: Number(DD),
      hour: Number(hh),
      minute: Number(mm),
      second: Number(ss)
    };
  } else if (type === 1) {
    return YYYY + "" + MM + DD + hh + mm + ss;
  } else {
    return YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
  }
};
util.getWeekStartAndEnd = function(addWeekCount = 0, date = new Date(), targetTimezone) {
  targetTimezone = util.getTargetTimezone(targetTimezone);
  let res = {};
  const dif = date.getTimezoneOffset();
  const timeDif = dif * 60 * 1e3 + targetTimezone * 60 * 60 * 1e3;
  const east8time = date.getTime() + timeDif;
  const east8Date = new Date(east8time);
  let week = east8Date.getDay();
  east8Date.getDate();
  let oneDayMillisecond = 1e3 * 60 * 60 * 24;
  date = new Date(date.getTime() + oneDayMillisecond * 7 * addWeekCount);
  let minusDay = week != 0 ? week - 1 : 6;
  let weekStart = new Date(date.getTime() - oneDayMillisecond * minusDay);
  let weekEnd = new Date(weekStart.getTime() + oneDayMillisecond * 6);
  let weekStartObj = util.getFullTime(weekStart, 2);
  let weekEndObj = util.getFullTime(weekEnd, 2);
  res.weekStart = new Date(`${weekStartObj.year}/${weekStartObj.month}/${weekStartObj.day}`).getTime() - timeDif;
  res.weekEnd = new Date(`${weekEndObj.year}/${weekEndObj.month}/${weekEndObj.day}`).getTime() + (24 * 60 * 60 * 1e3 - 1) - timeDif;
  return res;
};
util.getCommonTime = function(date = new Date(), targetTimezone) {
  if (typeof date === "string" && !isNaN(date))
    date = Number(date);
  if (typeof date == "number") {
    if (date.toString().length == 10)
      date *= 1e3;
    date = new Date(date);
  }
  targetTimezone = util.getTargetTimezone(targetTimezone);
  let res = {};
  const dif = date.getTimezoneOffset();
  const timeDif = dif * 60 * 1e3 + targetTimezone * 60 * 60 * 1e3;
  const { year, month, day, hour, minute, second } = util.getFullTime(date, 2);
  res.now = {
    year,
    month,
    day,
    hour,
    minute,
    second,
    date_day_str: util.timeFormat(date, "yyyy-MM-dd", targetTimezone),
    date_month_str: util.timeFormat(date, "yyyy-MM", targetTimezone)
  };
  let month_last_day = new Date(year, month, 0).getDate();
  let year_last_day = new Date(year, 12, 0).getDate();
  res.todayStart = new Date(`${year}/${month}/${day}`).getTime() - timeDif;
  res.today12End = new Date(`${year}/${month}/${day}`).getTime() + (12 * 60 * 60 * 1e3 - 1) - timeDif;
  res.todayEnd = new Date(`${year}/${month}/${day}`).getTime() + (24 * 60 * 60 * 1e3 - 1) - timeDif;
  res.monthStart = new Date(`${year}/${month}/1`).getTime() - timeDif;
  res.monthEnd = new Date(`${year}/${month}/${month_last_day}`).getTime() + (24 * 60 * 60 * 1e3 - 1) - timeDif;
  res.yearStart = new Date(`${year}/1/1`).getTime() - timeDif;
  res.yearEnd = new Date(`${year}/12/${year_last_day}`).getTime() + (24 * 60 * 60 * 1e3 - 1) - timeDif;
  res.hourStart = new Date(`${year}/${month}/${day} ${hour}:00:00`).getTime() - timeDif;
  res.hourEnd = new Date(`${year}/${month}/${day} ${hour}:59:59`).getTime() - timeDif;
  let year_last = year;
  let month_last = month - 1;
  if (month_last === 0) {
    month_last = 12;
    year_last = year - 1;
  }
  let month_last_day_last = new Date(year_last, month_last, 0).getDate();
  res.lastMonthStart = new Date(`${year_last}/${month_last}/1`).getTime() - timeDif;
  res.lastMonthEnd = new Date(`${year_last}/${month_last}/${month_last_day_last}`).getTime() + (24 * 60 * 60 * 1e3 - 1) - timeDif;
  res.yesterdayStart = res.todayStart - 1e3 * 3600 * 24;
  res.yesterday12End = res.today12End - 1e3 * 3600 * 24;
  res.yesterdayEnd = res.todayEnd - 1e3 * 3600 * 24;
  let weekObj = util.getWeekStartAndEnd(0, date);
  res.weekStart = weekObj.weekStart;
  res.weekEnd = weekObj.weekEnd;
  res.months = [];
  res.months[0] = {
    monthStart: res.monthStart,
    monthEnd: res.monthEnd
  };
  for (let i = 1; i <= 12; i++) {
    let month_last_day2 = new Date(year, i, 0).getDate();
    let monthStart = new Date(`${year}/${i}/1`).getTime() - timeDif;
    let monthEnd = new Date(`${year}/${i}/${month_last_day2}`).getTime() + (24 * 60 * 60 * 1e3 - 1) - timeDif;
    res.months[i] = {
      monthStart,
      monthEnd
    };
  }
  return res;
};
util.getMonthStartAndEnd = function(obj, targetTimezone) {
  targetTimezone = util.getTargetTimezone(targetTimezone);
  let res = {
    startTime: null,
    endTime: null
  };
  let { year, month } = obj;
  if (year > 0 && month > 0) {
    const dif = new Date().getTimezoneOffset();
    const timeDif = dif * 60 * 1e3 + targetTimezone * 60 * 60 * 1e3;
    let month_last_day = new Date(year, month, 0).getDate();
    res.startTime = new Date(`${year}/${month}/1`).getTime() - timeDif;
    res.endTime = new Date(`${year}/${month}/${month_last_day}`).getTime() + (24 * 60 * 60 * 1e3 - 1) - timeDif;
  }
  return res;
};
util.getDayOffsetStartAndEnd = function(count = 0, time, targetTimezone) {
  targetTimezone = util.getTargetTimezone(targetTimezone);
  let res = {};
  if (typeof time === "string" && !isNaN(time))
    time = Number(time);
  let date;
  if (time) {
    if (typeof time === "number") {
      if (time.toString().length == 10)
        time *= 1e3;
      date = new Date(time);
    } else {
      date = time;
    }
  } else {
    date = new Date();
  }
  const dif = date.getTimezoneOffset();
  const timeDif = dif * 60 * 1e3 + targetTimezone * 60 * 60 * 1e3;
  let oneDayMillisecond = 1e3 * 60 * 60 * 24;
  date = new Date(date.getTime() + oneDayMillisecond * 1 * count);
  let dateObj = util.getFullTime(date, 2);
  res.startTime = new Date(`${dateObj.year}/${dateObj.month}/${dateObj.day}`).getTime() - timeDif;
  res.endTime = new Date(`${dateObj.year}/${dateObj.month}/${dateObj.day}`).getTime() + (24 * 60 * 60 * 1e3 - 1) - timeDif;
  return res;
};
util.getMonthOffsetStartAndEnd = function(count = 0, time, targetTimezone) {
  targetTimezone = util.getTargetTimezone(targetTimezone);
  let res = {};
  if (typeof time === "string" && !isNaN(time))
    time = Number(time);
  let date;
  if (time) {
    if (typeof time === "number") {
      if (time.toString().length == 10)
        time *= 1e3;
      date = new Date(time);
    } else {
      date = time;
    }
  } else {
    date = new Date();
  }
  const dif = date.getTimezoneOffset();
  const timeDif = dif * 60 * 1e3 + targetTimezone * 60 * 60 * 1e3;
  let dateObj = util.getFullTime(date, 2);
  let month = dateObj.month + count;
  let year = dateObj.year;
  if (month > 12) {
    year = year + Math.floor(month / 12);
    month = Math.abs(month) % 12;
  } else if (month <= 0) {
    year = year - 1 - Math.floor(Math.abs(month) / 12);
    month = 12 - Math.abs(month) % 12;
  }
  let month_last_day = new Date(year, month, 0).getDate();
  res.startTime = new Date(`${year}/${month}/1`).getTime() - timeDif;
  res.endTime = new Date(`${year}/${month}/${month_last_day}`).getTime() + (24 * 60 * 60 * 1e3 - 1) - timeDif;
  return res;
};
util.getYearOffsetStartAndEnd = function(count = 0, time, targetTimezone) {
  targetTimezone = util.getTargetTimezone(targetTimezone);
  let res = {};
  if (typeof time === "string" && !isNaN(time))
    time = Number(time);
  let date;
  if (time) {
    if (typeof time === "number") {
      if (time.toString().length == 10)
        time *= 1e3;
      date = new Date(time);
    } else {
      date = time;
    }
  } else {
    date = new Date();
  }
  const dif = date.getTimezoneOffset();
  const timeDif = dif * 60 * 1e3 + targetTimezone * 60 * 60 * 1e3;
  let dateObj = util.getFullTime(date, 2);
  let year = dateObj.year + count;
  res.startTime = new Date(`${year}/1/1`).getTime() - timeDif;
  res.endTime = new Date(`${year}/12/31`).getTime() + (24 * 60 * 60 * 1e3 - 1) - timeDif;
  return res;
};
util.isLeapYear = function(year) {
  if (typeof year === "undefined") {
    let { now } = util.getCommonTime();
    year = now.year;
  } else if (typeof year === "object") {
    let { now } = util.getCommonTime(year);
    year = now.year;
  }
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
};
util.isQingming = function(data = new Date()) {
  let { now } = util.getCommonTime(data);
  let { year, month, day } = now;
  let key = false;
  if (util.isLeapYear(year) || util.isLeapYear(year - 1)) {
    if (month === 4 && day === 4) {
      key = true;
    }
  } else {
    if (month === 4 && day === 5) {
      key = true;
    }
  }
  return key;
};
util.getOffsetTime = function(date = new Date(), obj) {
  let time = typeof date === "number" ? new Date(date) : date;
  let year = obj.year || obj.y;
  let month = obj.month || obj.m;
  let day = obj.day || obj.d;
  let hours = obj.hours || obj.hh;
  let minutes = obj.minutes || obj.mm;
  let seconds = obj.seconds || obj.ss;
  let { mode = "after" } = obj;
  if (mode == "before") {
    year *= -1;
    month *= -1;
    day *= -1;
    hours *= -1;
    minutes *= -1;
    seconds *= -1;
  }
  if (year) {
    time = time.setFullYear(time.getFullYear() + year);
    time = new Date(time);
  }
  if (month) {
    time = time.setMonth(time.getMonth() + month);
    time = new Date(time);
  }
  if (day) {
    time = time.setDate(time.getDate() + day);
    time = new Date(time);
  }
  if (hours) {
    time = time.setHours(time.getHours() + hours);
    time = new Date(time);
  }
  if (minutes) {
    time = time.setMinutes(time.getMinutes() + minutes);
    time = new Date(time);
  }
  if (seconds) {
    time = time.setSeconds(time.getSeconds() + seconds);
    time = new Date(time);
  }
  return time.getTime();
};
exports.util = util;
