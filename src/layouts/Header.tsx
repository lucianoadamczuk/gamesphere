'use client';

import { useState } from 'react';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='container'>
			<h2 className=' text-5xl'>
				Games about <span>Playstation</span>
			</h2>

			<div className='  h-40'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et
					hic nesciunt earum tenetur vel animi, excepturi nobis necessitatibus
					ipsam, quae modi quo! Rem recusandae quia et, quasi deleniti
					provident?
				</p>
				<button className=' px-5 py-2 bg-primary rounded-md duration-300 hover:bg-primary-light active:scale-90'>
					{isOpen ? 'See more' : 'Hide'}
				</button>
			</div>
		</header>
	);
}
