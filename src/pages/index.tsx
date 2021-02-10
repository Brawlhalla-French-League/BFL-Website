import styles from '../styles/pages/HomePage.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MainLayout } from '../layout/MainLayout';

export default function HomePage() {
	return (
		<MainLayout mainBackgroundImg='/assets/imgs/Background.jpg'>
			<motion.img
				className={styles.mainLogo}
				src='/assets/imgs/Full_BFL_Logo.png'
				animate={{ scale: 1, opacity: 1 }}
				initial={{ scale: 2.5, opacity: 0 }}
				transition={{ duration: 0.3, ease: 'easeOut' }}
			/>
			<Link href='#'>
				<motion.a
					className={styles.ctaBtn}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					Nous Rejoindre
				</motion.a>
			</Link>
		</MainLayout>
	);
}
