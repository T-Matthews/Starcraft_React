let Home = props => {




    return (
        <div className="container mt-2">
            <div className='row'>
                <div className="col-12">
                    <div className="top-card mt-3p-3">
                        <img className="m-3" src="https://i.imgur.com/N5hX2AIl.jpg" />
                        <div>
                            <h3 className="top-card-header text-center">Starcraft II</h3>
                            <p className="pl-3">Developed by Blizzard Entertainment,
                                Starcraft II has remained the industry leading real time strategy
                                videogame since its release in  2010. Its clean interfaces,
                                unit pathing, and diversity of legitimate competitive strategies
                                made the game popular as both a game and a spectator e-sport.</p>
                            <p className="pl-3">For the uninitiated, the game is extensively a 1v1 competitive
                                game in which the player starts with workers that gather resources.
                                Those resources are used to create new buildings, which unlock stronger/more
                                expensive units. The end goal is to eliminate the opponent. There are 3 races,
                                of which the player chooses one prior to the start of the game, with each race having a distinct
                                advantage in various scenarios.</p>
                            <ul>
                                <li>
                                    Protoss - Mechanical, advanced alien race
                                </li>
                                <li>
                                    Terran - Humans, with traditional combat equipment
                                </li>
                                <li>
                                    Zerg - Creepy-crawly alien bug-adjacent race
                                </li>
                            </ul>




                            <p className="pl-3">If you are still interested, see below! Ive written far too much about this.</p>
                        </div>
                    </div>
                    <div className="race-descriptions">
                        <div className="col-4">
                            <h1 className="text-center">Protoss</h1>
                            <img className="art-image" src="https://i.pinimg.com/originals/72/81/57/72815732a7874a9ad8d3af986cd0d904.png" />
                            <p>Currently the most statistically dominant race 
                                in competitive play, the Protoss have may significant weapons at their advantage.
                                They have more capital ships than any other race, and the only one with a unit taking 
                                8 supply. Famous for building units in a "deathball", their army is slow but difficult to 
                                win fights against. The phrase "YOU MUST BUILD ADDITIONAL PYLONS" is a meme in some corners of the
                                internet, and this is where it comes from.

                                </p>

                        </div>
                        <div className="col-4">
                        <h1 className="text-center">Terran</h1>
                            <img className="art-image" src="https://nerdist.com/wp-content/uploads/2019/07/STARCRAFT_TERRAN_BATTLECRUISER_SHIP_ENV2_HEADER.png" />
                            <p>The human race, the race that I use when playing. Terran has a weaker main army than both 
                                zerg and protoss, which makes battling directly difficult. However, they have maneuverable
                                dropships that allow for infantry behind enemy lines to distract opponents. This playstyle is 
                                IMO more interesting to watch and play than the deathball strat mentioned above. Terran also
                                has nuclear missles, which take an eternity between launching and landing, allowing enemies to 
                                move out of the way. This leads to some incredible moments when they do land. Currently the most
                                underpowered/unsuccessful race in competitive play.
                                </p>

                        </div>
                        <div className="col-4">
                        <h1 className="text-center">Zerg</h1>
                            <img className="art-image" src="https://cdnb.artstation.com/p/assets/images/images/017/307/943/large/klim-melnikov-sc2-f-1.jpg?1555442744" />
                            <p>Zerg are the most unique, and in many way most difficult race to play. Their armies are known for 
                                being very fast, and very numerous, with damage output dependant on the ability of their units to 
                                surround the opponent. Their supply "building" can move, and they have another "building" that can 
                                repeatedly spead itsself, granting potentially incredible map vision, which is important in competitive modes.
                                </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home