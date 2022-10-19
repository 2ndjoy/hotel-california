import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const About = () => {
    return (
        <div>
            <div className='grid justify-center'>
                <p className='text-center'>Welcome to the Hotel California <br />
                    Such a lovely place such a lovely place<br />
                    Such a lovely face<br />
                    They livin' it up at the Hotel California<br />
                    What a nice surprise what a nice surprise<br />
                    Bring your alibis</p>

                <img src="https://img.freepik.com/free-photo/reflection-museum-science-industry-water-captured-chicago-usa_181624-29366.jpg?w=900&t=st=1666186903~exp=1666187503~hmac=9b2240d3ac3ad538166f0192861e99e7a8513e76996935596fa2432d452ec7cd" />
            </div>


            <div className='mt-20'>
                <TypeWriterEffect
                    textStyle={{ fontFamily: 'Red Hat Display' }}
                    startDelay={10}
                    cursorColor="blue"
                    text="
                             Welcome to the Hotel California
                             Such a lovely place (such a lovely place)
                             Such a lovely face
                             Plenty of room at the Hotel California
                             Any time of year (any time of year)
                             You can find it here
                             
                             Welcome to the Hotel California
                             Such a lovely place 
                             Such a lovely face
                             They livin' it up at the Hotel California
                             What a nice surprise (what a nice surprise)
                             Bring your alibis
                            "
                    typeSpeed={100}
                />
            </div>



        </div>
    );
};

export default About;
