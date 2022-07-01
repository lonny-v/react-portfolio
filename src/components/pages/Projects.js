import React from 'react';

export default function Portfolio() {
    return (
        <div className='page'>
            <h2>Projects</h2>


            <div id='columns'>
                <div class='column1'>
                    <div class='card'>
                        <a href="https://regal-help.herokuapp.com/"><h4 class='projectTitle'>Regal</h4>
                            <img id='moviesNow' src={require(`../../images/regal.png`)}
                                alt={`Regal`} /></a>
                        <a class="viewGithub" href='https://github.com/BlinkingHeimdall/Regal'>View on GitHub</a>
                    </div>
                    <div class='card'>
                        <a href="https://eshumway1045.github.io/Group-Project-1/"><h4 class='projectTitle'>Movies Now</h4>
                            <img id='moviesNow' src={require(`../../images/moviesnow.png`)}
                                alt={`Movies Now`} /></a>
                        <a class="viewGithub" href='https://github.com/eshumway1045/Group-Project-1'>View on GitHub</a>
                    </div>

                    <div class='card'>
                        <a href='https://betterthanstack.herokuapp.com/'><h4 class='projectTitle'>Better Than Stack</h4>
                            <img id='better-than-stack' src={require(`../../images/better-than-stack.png`)}
                                alt={`Better Than Stack`} /></a>
                        <a class="viewGithub" href='https://github.com/JaxonAdams/better-than-stack'>View on GitHub</a>
                    </div>

                    <div class='card'>
                        <a href='https://github.com/lonny-v/Express-Note-Taker'><h4 class='projectTitle'>Express Note Taker</h4>
                            <img id='note-taker' src={require(`../../images/note-taker.png`)}
                                alt={`Note Taker`} /></a>
                        <a class="viewGithub" href='https://github.com/lonny-v/Express-Note-Taker'>View on GitHub</a>
                    </div>
                </div>

                <div class='column2'>
                    <div class='card'>
                        <a href='https://github.com/lonny-v/readme-generator'><h4 class='projectTitle'>README.md Generator</h4>
                            <img id='readMe' src={require(`../../images/readme.png`)}
                                alt={`README.md Generator`} /></a>
                        <a class="viewGithub" href='https://github.com/lonny-v/readme-generator'>View on GitHub</a>
                    </div>

                    <div class='card'>
                        <a href='https://github.com/lonny-v/zookeepr'><h4 class='projectTitle'>ZooKeepr</h4>
                            <img id='zookeeper' src={require(`../../images/zookeeper.png`)}
                                alt={`Zookeepr`} /></a>
                        <a class="viewGithub" href='https://github.com/lonny-v/zookeepr'>View on GitHub</a>
                    </div>

                    <div class='card'>
                        <a href='https://lonny-v.github.io/password-generator-22/'><h4 class='projectTitle'>Password Generator</h4>
                            <img id='passwordGen' src={require(`../../images/password.png`)}
                                alt={`Password Generator`} /></a>
                        <a class="viewGithub" href='https://github.com/lonny-v/password-generator-22'>View on GitHub</a>
                    </div>
                </div>
            </div>



        </div>
    );
}