const layout = {
  devices: {
    mini: "479px",
    mobile: "767px",
    table: "991px",
    desktop: "1439px",
  },
};

const media = {
  mini: `(max-width: ${layout.devices.mini})`,
  mobile: `(max-width: ${layout.devices.mobile})`,
  table: `(max-width: ${layout.devices.table})`,
  tablet: `(max-width: ${layout.devices.table})`,
  maxDesktop: `(max-width: ${layout.devices.desktop})`,
  desktop: `(min-width: ${layout.devices.desktop})`,
};

export default media;
