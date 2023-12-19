import {useState} from "react";

export default function CustomNavbarToggle({expanded, onClick}) {
    return (
        <button
            className="navbar-toggler"
            type="button"
            aria-expanded={expanded}
            onClick={onClick}
        >
            {expanded ? 'X' : '☰'}
        </button>
    );
}