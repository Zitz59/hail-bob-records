import NavLink from "../NavLink/NavLink";
import {navLinks} from "@/app/constants/navLinks";
import {FC} from "react";
import s from './Sidebar.module.scss'
import Image from "next/image";

type PropsType = {
    open: boolean
    action: () => void
}

export const Sidebar: FC<PropsType> = ({open, action}) => {
    return (
        <>
            {/* затемнение */}
            {open && (
                <div className={s.background} onClick={action}/>
            )}

            <aside className={`${s.sidebar} ${open ? s.open : ""}`}>
                <button className={s.close} onClick={action}>
                    <Image
                        width={55}
                        height={40}
                        src="/icons/close_icon.png"
                        alt="close sidebar"
                    />
                </button>

                <nav className={s.nav}>
                    {navLinks.map(({id, label, href}) => (
                        <NavLink
                            key={id}
                            id={id}
                            href={href}
                            onClick={action}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
};