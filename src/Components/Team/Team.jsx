// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import TeamCard from './TeamCard/TeamCard';

const Team = () => {
    const [teams, setTeams] = useState([]);
    const teamCardsContainer = useRef(null);  

    useEffect(() => {
        fetch('teams.json')
            .then(res => res.json())
            .then(data => {
                setTeams(data);
                
                // gasp animation calculation
                // gsap.fromTo(teamCardsContainer.current.children, 
                //     { opacity: 0, y: 30 },
                //     { opacity: 1, y: 0, stagger: 0.2, delay: 0.5 }
                // );
            })
    }, []);

    useEffect(() => {
        // GSAP animation code
        const div = teamCardsContainer.current;
      
        // Use gsap animation to set initial state (if needed)
        gsap.set(div, { opacity: 0, y: 30 });
      
        // Create an IntersectionObserver
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              // When the component is in view, trigger the animation
              gsap.to(div, { opacity: 1, y: 0, stagger: 0.2, ease: 'power3.out' });
      
              // Disconnect the observer once the animation has been triggered
              observer.disconnect();
            }
          },
          { root: null, rootMargin: '0px', threshold: 0.2 }
        );
      
        observer.observe(div);
      
        return () => {
          // Clean up the observer when the component unmounts
          observer.disconnect();
        };
      }, []);

    return (
        <div>
            <div className='text-center mt-20'>
                <p className='text-base text-teal-600 font-bold '>Team</p>
                <h1 className='text-3xl text-[#151515] font-bold '>Meet Our Team</h1>
                <p className='text-base text-[#737373] font-normal py-5'>
                    The majority have suffered alteration in some form, by injected humour, 
                    or randomised words which don't look even slightly believable.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' ref={teamCardsContainer}>
                {
                    teams.map(team => <TeamCard key={team._id} team={team}/>)
                }
            </div>
        </div>
    );
}

export default Team;

