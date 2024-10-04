import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
    return <NavbarStyled>
        <NavLink className={({ isActive }) => isActive ? "active-class" : "non-active-class"} to="/">Accueil</NavLink>
        <NavLink className={({ isActive }) => isActive ? "active-class" : "non-active-class"} to="/infos">A propos</NavLink>
    </NavbarStyled>
}
const NavbarStyled = styled.nav`
    display: flex;
        justify-content: space-between;
        max-width: 190px;
        column-gap: 26px;
        margin-left: 10px;
        white-space: nowrap;

        @media screen and (min-width: 480px) {
            max-width: 255px;
            width: 100%;
        }

        a {
            color: black;
        }

        .active-class {
            text-decoration: underline;
            text-underline-offset: 3px;
        }
`;
