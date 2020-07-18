/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-07 04:02:32
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-19 06:12:26
 */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import { Header, Loader } from '../_shared/components';
import { About, Contact, Footer, GetInTouch, Hero, Projects, Resume, Services, Skills } from './components';

const Home = () => {
	const [loading] = useState(true);
	// useFirestoreConnect([{ collection: 'reume', orderBy: ['created_at', 'desc'], limit: 3 }]);
	useFirestoreConnect([
		{ collection: 'resume', orderBy: ['order', 'desc'] },
		{ collection: 'skills' },
		{ collection: 'projects', orderBy: ['order', 'asc'] },
		{ collection: 'other_projects' },
	]);

	const resume = useSelector((state) => state.firestore.ordered.resume);
	const skills = useSelector((state) => state.firestore.ordered.skills);
	const projects = useSelector((state) => state.firestore.ordered.projects);
	const other_projects = useSelector((state) => state.firestore.ordered.other_projects);

	return !(isLoaded(resume) && isLoaded(skills) && isLoaded(projects) && isLoaded(other_projects)) ? (
		<Loader loading={loading} fullscreen hCenter />
	) : (
		<React.Fragment>
			<Header />

			<Hero />

			<About number_of_project={10} />

			<Resume data={resume} />

			<Services />

			<Skills data={skills} />

			<Projects data={projects} otherData={other_projects} />

			{/* Blog will go here */}

			{/* <NoPt /> */}

			<GetInTouch />

			<Contact />

			<Footer />
		</React.Fragment>
	);
};

export default Home;
