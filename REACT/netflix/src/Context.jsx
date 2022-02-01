import React, { useState } from 'react';
import { createContext } from 'react';

export const MoviesContext = createContext({})


function MoviesProvider({ children }) {
  // slider
  const [sliderdata, setsliderdata] = useState([
    {
      title: "Trending Now",
      movies: [
        {
          moviename: "Interstellar",
          match: "97% Match",
          TV: "PG-13",
          text: "2h 49m",
          mainimg: "interstellarmain",
          itemimg: "interstellaritem",
          Rating: "Rating: 8.6/10",
          Duration: "Duration: 2h 49m",
          Stars: "Stars: Matthew McConaughey, Anne Hathaway, Jessica Chastain",
          genre: "genre: Adventure, Drama, Sci-Fi",
          Overview: "Overview: In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home."
        },
        {
          moviename: "It's Always Sunny in Philadelphia",
          match: "100% Match",
          TV: "TV-MA",
          text: "13 Seasons",
          mainimg: "Philadelphiamain",
          itemimg: "Philadelphiaitem",
          Rating: "Rating: 8.8/10",
          Duration: "Duration: 13 Seasons",
          Stars: "Stars: Glenn Howerton, Rob McElhenney, Charlie Day",
          genre: "genre: Comedy",
          Overview: `Overview: Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald "Mac" McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.`
        },
        {
          moviename: "Marvel's Luke Cage",
          match: "93% Match",
          TV: "TV-MA",
          text: "2 Seasons",
          mainimg: "marvelmain",
          itemimg: "marvelitem",
          Rating: "Rating: 7.5/10",
          Duration: "Duration: 2 Seasons",
          Stars: "Stars: Mike Colter, Simone Missick, Theo Rossi",
          genre: "genre: Action, Crime, Drama",
          Overview: `Overview: This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. "Marvel's Luke Cage" is the third show in the Netflix-original Defenders series.`
        },
        {
          moviename: "The Office",
          match: "100% Match",
          TV: "TV-14",
          text: "9 Seasons",
          mainimg: "officemain",
          itemimg: "officeitem",
          Rating: "Rating: 8.8/10",
          Duration: "Duration: 9 Seasons",
          Stars: "Stars: Steve Carell, Jenna Fischer, John Krasinski",
          genre: "genre: Comedy",
          Overview: `Overview: This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.`
        },
        {
          moviename: "Parks and Recreation",
          match: "100% Match",
          TV: "TV-PG",
          text: "7 Seasons",
          mainimg: "recreationmain",
          itemimg: "recreationitem",
          Rating: "Rating: 8.6/10",
          Duration: "Duration: 7 Seasons",
          Stars: "Stars: Amy Poehler, Nick Offerman, Chris Pratt",
          genre: "genre: Comedy",
          Overview: `Overview: Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.`
        },
        {
          moviename: "Thor:Ragnarok",
          match: "98% Match",
          TV: "PG-13",
          text: "2h 10m",
          mainimg: "thormain",
          itemimg: "thoritem",
          Rating: "Rating: 7.9/10",
          Duration: "Duration: 2h 10m",
          Stars: "Stars: Chris Hemsworth, Tom Hiddleston, Cate Blanchett",
          genre: "genre: Action, Adventure, Comedy",
          Overview: `Overview: Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.`
        },
        {
          moviename: "Star Wars: Episode VIII: The Last Jedi",
          match: "98% Match",
          TV: "PG-13",
          text: "2h 31m",
          mainimg: "warsmain",
          itemimg: "warsitem",
          Rating: "Rating: 7.3/10",
          Duration: "Duration: 2h 31m",
          Stars: "Stars: Daisy Ridley, John Boyega, Mark Hamill",
          genre: "genre: Action, Adventure, Fantasy",
          Overview: "Overview: Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy."
        },
        {
          moviename: "Dexter",
          match: "99% Match",
          TV: "TV-MA",
          text: "8 Seasons",
          mainimg: "dextermain",
          itemimg: "dexteritem",
          Rating: "Rating: 8.7/10",
          Duration: "Duration: 8 Seasons",
          Stars: "Stars: Michael C. Hall, Jennifer Carpenter, David Zayas",
          genre: "genre: Crime, Drama, Mystery",
          Overview: "Overview: Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his `skills'. It's a unique brand of justice for which charming Dexter feels a psychological hunger."
        }

      ]
    },
    {
      title: "Trending Now",
      movies: [     
        
        
       
        {
          moviename: "Dexter",
          match: "99% Match",
          TV: "TV-MA",
          text: "8 Seasons",
          mainimg: "dextermain",
          itemimg: "dexteritem",
          Rating: "Rating: 8.7/10",
          Duration: "Duration: 8 Seasons",
          Stars: "Stars: Michael C. Hall, Jennifer Carpenter, David Zayas",
          genre: "genre: Crime, Drama, Mystery",
          Overview: "Overview: Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his `skills'. It's a unique brand of justice for which charming Dexter feels a psychological hunger."
        },
        {
          moviename: "Star Wars: Episode VIII: The Last Jedi",
          match: "98% Match",
          TV: "PG-13",
          text: "2h 31m",
          mainimg: "warsmain",
          itemimg: "warsitem",
          Rating: "Rating: 7.3/10",
          Duration: "Duration: 2h 31m",
          Stars: "Stars: Daisy Ridley, John Boyega, Mark Hamill",
          genre: "genre: Action, Adventure, Fantasy",
          Overview: "Overview: Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy."
        },
        {
          moviename: "Thor:Ragnarok",
          match: "98% Match",
          TV: "PG-13",
          text: "2h 10m",
          mainimg: "thormain",
          itemimg: "thoritem",
          Rating: "Rating: 7.9/10",
          Duration: "Duration: 2h 10m",
          Stars: "Stars: Chris Hemsworth, Tom Hiddleston, Cate Blanchett",
          genre: "genre: Action, Adventure, Comedy",
          Overview: `Overview: Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.`
        },
        
        {
          moviename: "Parks and Recreation",
          match: "100% Match",
          TV: "TV-PG",
          text: "7 Seasons",
          mainimg: "recreationmain",
          itemimg: "recreationitem",
          Rating: "Rating: 8.6/10",
          Duration: "Duration: 7 Seasons",
          Stars: "Stars: Amy Poehler, Nick Offerman, Chris Pratt",
          genre: "genre: Comedy",
          Overview: `Overview: Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.`
        },
        
        {
          moviename: "The Office",
          match: "100% Match",
          TV: "TV-14",
          text: "9 Seasons",
          mainimg: "officemain",
          itemimg: "officeitem",
          Rating: "Rating: 8.8/10",
          Duration: "Duration: 9 Seasons",
          Stars: "Stars: Steve Carell, Jenna Fischer, John Krasinski",
          genre: "genre: Comedy",
          Overview: `Overview: This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.`
        },
        
        {
          moviename: "Marvel's Luke Cage",
          match: "93% Match",
          TV: "TV-MA",
          text: "2 Seasons",
          mainimg: "marvelmain",
          itemimg: "marvelitem",
          Rating: "Rating: 7.5/10",
          Duration: "Duration: 2 Seasons",
          Stars: "Stars: Mike Colter, Simone Missick, Theo Rossi",
          genre: "genre: Action, Crime, Drama",
          Overview: `Overview: This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. "Marvel's Luke Cage" is the third show in the Netflix-original Defenders series.`
        },
        {
          moviename: "It's Always Sunny in Philadelphia",
          match: "100% Match",
          TV: "TV-MA",
          text: "13 Seasons",
          mainimg: "Philadelphiamain",
          itemimg: "Philadelphiaitem",
          Rating: "Rating: 8.8/10",
          Duration: "Duration: 13 Seasons",
          Stars: "Stars: Glenn Howerton, Rob McElhenney, Charlie Day",
          genre: "genre: Comedy",
          Overview: `Overview: Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald "Mac" McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.`
        },
        {
          moviename: "Interstellar",
          match: "97% Match",
          TV: "PG-13",
          text: "2h 49m",
          mainimg: "interstellarmain",
          itemimg: "interstellaritem",
          Rating: "Rating: 8.6/10",
          Duration: "Duration: 2h 49m",
          Stars: "Stars: Matthew McConaughey, Anne Hathaway, Jessica Chastain",
          genre: "genre: Adventure, Drama, Sci-Fi",
          Overview: "Overview: In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home."
        },

      ]
    },
    {
      title: "Trending Now",
      movies: [
        {
          moviename: "Interstellar",
          match: "97% Match",
          TV: "PG-13",
          text: "2h 49m",
          mainimg: "interstellarmain",
          itemimg: "interstellaritem",
          Rating: "Rating: 8.6/10",
          Duration: "Duration: 2h 49m",
          Stars: "Stars: Matthew McConaughey, Anne Hathaway, Jessica Chastain",
          genre: "genre: Adventure, Drama, Sci-Fi",
          Overview: "Overview: In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home."
        },
        {
          moviename: "It's Always Sunny in Philadelphia",
          match: "100% Match",
          TV: "TV-MA",
          text: "13 Seasons",
          mainimg: "Philadelphiamain",
          itemimg: "Philadelphiaitem",
          Rating: "Rating: 8.8/10",
          Duration: "Duration: 13 Seasons",
          Stars: "Stars: Glenn Howerton, Rob McElhenney, Charlie Day",
          genre: "genre: Comedy",
          Overview: `Overview: Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald "Mac" McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.`
        },
        {
          moviename: "Marvel's Luke Cage",
          match: "93% Match",
          TV: "TV-MA",
          text: "2 Seasons",
          mainimg: "marvelmain",
          itemimg: "marvelitem",
          Rating: "Rating: 7.5/10",
          Duration: "Duration: 2 Seasons",
          Stars: "Stars: Mike Colter, Simone Missick, Theo Rossi",
          genre: "genre: Action, Crime, Drama",
          Overview: `Overview: This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. "Marvel's Luke Cage" is the third show in the Netflix-original Defenders series.`
        },
        {
          moviename: "The Office",
          match: "100% Match",
          TV: "TV-14",
          text: "9 Seasons",
          mainimg: "officemain",
          itemimg: "officeitem",
          Rating: "Rating: 8.8/10",
          Duration: "Duration: 9 Seasons",
          Stars: "Stars: Steve Carell, Jenna Fischer, John Krasinski",
          genre: "genre: Comedy",
          Overview: `Overview: This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.`
        },
        {
          moviename: "Parks and Recreation",
          match: "100% Match",
          TV: "TV-PG",
          text: "7 Seasons",
          mainimg: "recreationmain",
          itemimg: "recreationitem",
          Rating: "Rating: 8.6/10",
          Duration: "Duration: 7 Seasons",
          Stars: "Stars: Amy Poehler, Nick Offerman, Chris Pratt",
          genre: "genre: Comedy",
          Overview: `Overview: Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.`
        },
        {
          moviename: "Thor:Ragnarok",
          match: "98% Match",
          TV: "PG-13",
          text: "2h 10m",
          mainimg: "thormain",
          itemimg: "thoritem",
          Rating: "Rating: 7.9/10",
          Duration: "Duration: 2h 10m",
          Stars: "Stars: Chris Hemsworth, Tom Hiddleston, Cate Blanchett",
          genre: "genre: Action, Adventure, Comedy",
          Overview: `Overview: Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.`
        },
        {
          moviename: "Star Wars: Episode VIII: The Last Jedi",
          match: "98% Match",
          TV: "PG-13",
          text: "2h 31m",
          mainimg: "warsmain",
          itemimg: "warsitem",
          Rating: "Rating: 7.3/10",
          Duration: "Duration: 2h 31m",
          Stars: "Stars: Daisy Ridley, John Boyega, Mark Hamill",
          genre: "genre: Action, Adventure, Fantasy",
          Overview: "Overview: Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy."
        },
        {
          moviename: "Dexter",
          match: "99% Match",
          TV: "TV-MA",
          text: "8 Seasons",
          mainimg: "dextermain",
          itemimg: "dexteritem",
          Rating: "Rating: 8.7/10",
          Duration: "Duration: 8 Seasons",
          Stars: "Stars: Michael C. Hall, Jennifer Carpenter, David Zayas",
          genre: "genre: Crime, Drama, Mystery",
          Overview: "Overview: Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his `skills'. It's a unique brand of justice for which charming Dexter feels a psychological hunger."
        }

      ]
    },
    {
      title: "Trending Now",
      movies: [     
        
        
       
        {
          moviename: "Dexter",
          match: "99% Match",
          TV: "TV-MA",
          text: "8 Seasons",
          mainimg: "dextermain",
          itemimg: "dexteritem",
          Rating: "Rating: 8.7/10",
          Duration: "Duration: 8 Seasons",
          Stars: "Stars: Michael C. Hall, Jennifer Carpenter, David Zayas",
          genre: "genre: Crime, Drama, Mystery",
          Overview: "Overview: Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his `skills'. It's a unique brand of justice for which charming Dexter feels a psychological hunger."
        },
        {
          moviename: "Star Wars: Episode VIII: The Last Jedi",
          match: "98% Match",
          TV: "PG-13",
          text: "2h 31m",
          mainimg: "warsmain",
          itemimg: "warsitem",
          Rating: "Rating: 7.3/10",
          Duration: "Duration: 2h 31m",
          Stars: "Stars: Daisy Ridley, John Boyega, Mark Hamill",
          genre: "genre: Action, Adventure, Fantasy",
          Overview: "Overview: Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy."
        },
        {
          moviename: "Thor:Ragnarok",
          match: "98% Match",
          TV: "PG-13",
          text: "2h 10m",
          mainimg: "thormain",
          itemimg: "thoritem",
          Rating: "Rating: 7.9/10",
          Duration: "Duration: 2h 10m",
          Stars: "Stars: Chris Hemsworth, Tom Hiddleston, Cate Blanchett",
          genre: "genre: Action, Adventure, Comedy",
          Overview: `Overview: Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.`
        },
        
        {
          moviename: "Parks and Recreation",
          match: "100% Match",
          TV: "TV-PG",
          text: "7 Seasons",
          mainimg: "recreationmain",
          itemimg: "recreationitem",
          Rating: "Rating: 8.6/10",
          Duration: "Duration: 7 Seasons",
          Stars: "Stars: Amy Poehler, Nick Offerman, Chris Pratt",
          genre: "genre: Comedy",
          Overview: `Overview: Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.`
        },
        
        {
          moviename: "The Office",
          match: "100% Match",
          TV: "TV-14",
          text: "9 Seasons",
          mainimg: "officemain",
          itemimg: "officeitem",
          Rating: "Rating: 8.8/10",
          Duration: "Duration: 9 Seasons",
          Stars: "Stars: Steve Carell, Jenna Fischer, John Krasinski",
          genre: "genre: Comedy",
          Overview: `Overview: This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.`
        },
        
        {
          moviename: "Marvel's Luke Cage",
          match: "93% Match",
          TV: "TV-MA",
          text: "2 Seasons",
          mainimg: "marvelmain",
          itemimg: "marvelitem",
          Rating: "Rating: 7.5/10",
          Duration: "Duration: 2 Seasons",
          Stars: "Stars: Mike Colter, Simone Missick, Theo Rossi",
          genre: "genre: Action, Crime, Drama",
          Overview: `Overview: This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. "Marvel's Luke Cage" is the third show in the Netflix-original Defenders series.`
        },
        {
          moviename: "It's Always Sunny in Philadelphia",
          match: "100% Match",
          TV: "TV-MA",
          text: "13 Seasons",
          mainimg: "Philadelphiamain",
          itemimg: "Philadelphiaitem",
          Rating: "Rating: 8.8/10",
          Duration: "Duration: 13 Seasons",
          Stars: "Stars: Glenn Howerton, Rob McElhenney, Charlie Day",
          genre: "genre: Comedy",
          Overview: `Overview: Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald "Mac" McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.`
        },
        {
          moviename: "Interstellar",
          match: "97% Match",
          TV: "PG-13",
          text: "2h 49m",
          mainimg: "interstellarmain",
          itemimg: "interstellaritem",
          Rating: "Rating: 8.6/10",
          Duration: "Duration: 2h 49m",
          Stars: "Stars: Matthew McConaughey, Anne Hathaway, Jessica Chastain",
          genre: "genre: Adventure, Drama, Sci-Fi",
          Overview: "Overview: In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home."
        },

      ]
    },
   
   
   

  ]);


  return <MoviesContext.Provider value={{ sliderdata, setsliderdata }}>
    {children}
  </MoviesContext.Provider>
}

export default MoviesProvider;
