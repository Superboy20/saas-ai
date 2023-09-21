import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function DashboardPage() {
    return (
        <div>
            <p>Dashboard Page (Protected)</p>
            <UserButton afterSignOutUrl='/' />
        </div>
    )
}