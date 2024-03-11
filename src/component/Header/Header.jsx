import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { UseSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return <div>Header</div>;
}

export default Header;
