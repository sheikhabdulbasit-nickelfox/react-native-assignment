// A wrapper for MomentJs and Js Date/Time
import moment from "moment";

export default DeviceDate = {
  format: (date = moment(), format = "YYYY-MM-DD HH:mm A") => {
    return moment(date).format(format);
  },
  getIsoDate: date => {
    return moment(date).toISOString();
  },
  getUtcDate: date => {
    return moment.utc(date);
  },
  getCurrentMoment: () => {
    return moment();
  },
  getDateMoment: date => {
    return moment(date);
  }
};
