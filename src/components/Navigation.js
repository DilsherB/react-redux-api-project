import { FaGear } from "react-icons/fa6";
import { PiMicrophoneFill } from "react-icons/pi";
import { IoChevronBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";

const Navigation = () => (
  <Box
    sx={{
      paddingInline: "3%",
      paddingBlock: "0.5%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <NavLink to="/" className="back-arrow">
      {" "}
      <IoChevronBack size={25} className="back-arrow" />
    </NavLink>
    <NavLink to="/" className="heading">
      <h2>countries stats</h2>
    </NavLink>
    <Box sx={{ gap: "20px", display: "flex" }}>
      <PiMicrophoneFill size={15} />
      <FaGear size={15} />
    </Box>
  </Box>
);

export default Navigation;
