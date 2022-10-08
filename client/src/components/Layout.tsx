import Sidebar from './Sidebar';
import { ReactNode } from 'react';
import styles from '../../styles/Home.module.css'

interface Props {
    children?: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className={styles.main__container}>
            <Sidebar />
            <main>{children}</main>
        </div>
    )
}