import Link from "next/link";
import styles from "../../styles/Home.module.css"

const Sidebar = () => {
    return (
        <nav className={`${styles.sidebarContainer} secondary-bg`}>
            <div>Logo</div>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/assets">Assets</Link>
            <Link href="/dashboard/sell">Sell</Link>
            <Link href="/dashboard/services">Services</Link>
            <Link href="/dashboard/calendar">Calendar</Link>
            <Link href="/dashboard/messages">Messages</Link>
            <Link href="/dashboard/settings">Settings</Link>
            <div>Log out</div>
        </nav>
    )
}

export default Sidebar;