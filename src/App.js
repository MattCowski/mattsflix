import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const onChange = (e)=> console.log(e.target.value)

const searchResultData = [{"unit":356,"show_id":1154386,"show_title":"The Fifth Element","release_year":"1997","rating":"3.9","category":"Action & Adventure","show_cast":"Bruce Willis, Gary Oldman, Ian Holm, Milla Jovovich, Chris Tucker, Luke Perry, Brion James, Tricky, Lee Evans, John Neville","director":"Luc Besson","summary":"In this imaginative sci-fi epic, a 23rd-century cabbie finds himself involved with a fetching alien who may hold the key to saving the world.","poster":"http:\/\/netflixroulette.net\/api\/posters\/1154386.jpg","mediatype":0,"runtime":"126 min"},{"unit":639,"show_id":712171,"show_title":"Look Who's Talking","release_year":"1989","rating":"3.3","category":"Comedies","show_cast":"Bruce Willis, John Travolta, George Segal, Kirstie Alley, Olympia Dukakis, Abe Vigoda","director":"Amy Heckerling","summary":"Mollie is a single working mother who's out to find the perfect father for her child. Her baby, Mikey, prefers James, a cab driver turned babysitter who has what it takes to make them both happy. But Mollie won't even consider James.","poster":"http:\/\/netflixroulette.net\/api\/posters\/712171.jpg","mediatype":0,"runtime":"93 min"},{"unit":733,"show_id":60010721,"show_title":"Nobody's Fool","release_year":"1994","rating":"3.7","category":"Dramas","show_cast":"Paul Newman, Jessica Tandy, Bruce Willis, Melanie Griffith, Dylan Walsh, Pruitt Taylor Vince, Gene Saks, Josef Sommer, Philip Seymour Hoffman, Philip Bosco","director":"Robert Benton","summary":"Paul Newman received an Oscar nod for his turn as Donald, a loner who walked out on his family years ago and now lives in a small town in New York, spending his days working for a contractor named Carl (Bruce Willis) and flirting with Carl's wife (Melanie Griffith). One day, Donald's estranged son (Dylan Walsh) shows up with his own son, sparking reconciliation and a renewed stance on life for Donald. The drama is Jessica Tandy's last film.","poster":"http:\/\/netflixroulette.net\/api\/posters\/60010721.jpg","mediatype":0,"runtime":"110 min"},{"unit":914,"show_id":880640,"show_title":"Pulp Fiction","release_year":"1994","rating":"4.1","category":"Oscar-winning Movies","show_cast":"John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros","director":"Quentin Tarantino","summary":"Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation of filmmakers with this crime caper's stylized, over-the-top violence and dark comic spirit.","poster":"http:\/\/netflixroulette.net\/api\/posters\/880640.jpg","mediatype":0,"runtime":"154 min"},{"unit":949,"show_id":292118,"show_title":"Beavis and Butt-head Do America","release_year":"1996","rating":"3.4","category":"Comedies","show_cast":"Mike Judge, Bruce Willis, Demi Moore, Cloris Leachman, Robert Stack, Jacqueline Barba, Pamela Blair, Eric Bogosian, Kristofor Brown, Tony Darling","director":"Mike Judge","summary":"After realizing that their beloved boob tube is gone, couch potatoes Beavis and Butt-head (both voiced by creator Mike Judge) set off on a cross-country expedition that takes them from Las Vegas to the nation's capital. Along the way, they're mistaken for hit men and get caught up in a weapons-smuggling conspiracy as a gaggle of mobsters and lawmen shadow the two morons. Celebrity voices include Cloris Leachman, Robert Stack and David Letterman.","poster":"http:\/\/netflixroulette.net\/api\/posters\/292118.jpg","mediatype":0,"runtime":"81 min"},{"unit":1463,"show_id":520179,"show_title":"Four Rooms","release_year":"1995","rating":"3.6","category":"Comedies","show_cast":"Tim Roth, Antonio Banderas, Jennifer Beals, Bruce Willis, Paul Calderon, Madonna, Marisa Tomei, Quentin Tarantino, Ione Skye, Lili Taylor","director":"Quentin Tarantino, Robert Rodriguez, Allison Anders, Alexandre Rockwell","summary":"One mad New Year's Eve, an overwhelmed bellboy copes with witches and diabolical children, gets caught in the middle of a sour relationship and settles a bloody bet for members of a superstar's entourage.","poster":"http:\/\/netflixroulette.net\/api\/posters\/520179.jpg","mediatype":0,"runtime":"98 min"},{"unit":2570,"show_id":70230088,"show_title":"The Expendables 2","release_year":"2012","rating":"3.9","category":"Action & Adventure","show_cast":"Sylvester Stallone, Jason Statham, Jet Li, Dolph Lundgren, Chuck Norris, Jean-Claude Van Damme, Bruce Willis, Arnold Schwarzenegger, Terry Crews, Randy Couture","director":"Simon West","summary":"In this high-octane thriller, Mr. Church brings the Expendables back together for an easy job -- but things go wrong, and one of the mercenaries is brutally murdered. Now the band of hired guns goes on a mission of revenge in hostile territory.","poster":"http:\/\/netflixroulette.net\/api\/posters\/70230088.jpg","mediatype":0,"runtime":"103 min"},{"unit":3774,"show_id":70227650,"show_title":"Lay the Favorite","release_year":"2012","rating":"3.4","category":"Comedies","show_cast":"Bruce Willis, Rebecca Hall, Catherine Zeta-Jones, Vince Vaughn, Joshua Jackson, Laura Prepon, Frank Grillo, Wayne P\u00e9re, John Carroll Lynch, Corbin Bernsen","director":"Stephen Frears","summary":"Leaving behind her job as a Florida stripper, bubbly Beth Raymer heads to Las Vegas, where she soon joins forces with a professional sports bookie and becomes his good-luck charm -- until his jealous wife steps in.","poster":"http:\/\/netflixroulette.net\/api\/posters\/70227650.jpg","mediatype":0,"runtime":"94 min"},{"unit":4659,"show_id":70245670,"show_title":"Fire with Fire","release_year":"2012","rating":"3.8","category":"Action & Adventure","show_cast":"Josh Duhamel, Bruce Willis, Rosario Dawson, Vincent D'Onofrio, 50 Cent, Julian McMahon, Vinnie Jones, Arie Verveen, Eric Winter, Bonnie Somerville","director":"David Barrett","summary":"After witnessing a brutal murder, a firefighter is placed in the witness protection program. But when his new identity becomes compromised, he's forced to take an unexpected course of action to get his life back and save the lives of those he loves.","poster":"http:\/\/netflixroulette.net\/api\/posters\/70245670.jpg","mediatype":0,"runtime":"97 min"},{"unit":6044,"show_id":70199239,"show_title":"Set Up","release_year":"2011","rating":"3.4","category":"Action & Adventure","show_cast":"50 Cent, Bruce Willis, Ryan Phillippe, Jenna Dewan-Tatum, Randy Couture, James Remar, Shaun Toub, Will Yun Lee, Susie Abromeit, Jordan Trovillion","director":"Mike Gunther","summary":"A diamond heist goes horribly wrong, and the group of friends who sought to make a fortune must instead fight for their very survival. Bruce Willis, Ryan Phillippe and Curtis \"50 Cent\" Jackson bring the firepower in this thriller.","poster":"http:\/\/netflixroulette.net\/api\/posters\/70199239.jpg","mediatype":0,"runtime":"None"},{"unit":6166,"show_id":60026139,"show_title":"Tears of the Sun","release_year":"2003","rating":"3.8","category":"Action & Adventure","show_cast":"Bruce Willis, Monica Bellucci, Cole Hauser, Eamonn Walker, Johnny Messner, Nick Chinlund, Charles Ingram, Paul Francis, Chad Smith, Tom Skerritt","director":"Antoine Fuqua","summary":"Bruce Willis stars as Lt. A.K. Waters, a Navy SEAL sent to the jungles of embattled Africa to rescue a doctor, arriving only to realize he must also save the refugees in the doctor's care -- even if it places his military career in jeopardy.","poster":"http:\/\/netflixroulette.net\/api\/posters\/60026139.jpg","mediatype":0,"runtime":"121 min"},{"unit":17126,"show_id":80005227,"show_title":"Altman","release_year":"2014","rating":"2.8","category":"Documentaries","show_cast":"Kathryn Reed Altman, Paul Thomas Anderson, James Caan, Keith Carradine, Julianne Moore, Bruce Willis, Robin Williams, Lily Tomlin","director":"Ron Mann","summary":"Ron Mann chisels a well-crafted tribute to maverick auteur Robert Altman, whose fertile career encompasses huge hits, big misses and controversy.","poster":"http:\/\/netflixroulette.net\/api\/posters\/80005227.jpg","mediatype":0,"runtime":"N\/A"},{"unit":17158,"show_id":60020809,"show_title":"Hart's War","release_year":"2002","rating":"3.5","category":"Dramas","show_cast":"Bruce Willis, Colin Farrell, Terrence Howard, Cole Hauser, Marcel Iures, Linus Roache, Vicellous Reon Shannon, Maury Sterling, Sam Jaeger, Scott Michael Campbell, Rory Cochrane, Sebastian Tillinger, Rick Ravanello, Adrian Grenier, Michael Weston","director":"Gregory Hoblit","summary":"When an African-American pilot in a German POW camp is accused of killing an inmate, a lieutenant must defend him without exposing dangerous secrets.","poster":"http:\/\/netflixroulette.net\/api\/posters\/60020809.jpg","mediatype":0,"runtime":"N\/A"},{"unit":47568,"show_id":60000162,"show_title":"The Whole Nine Yards","release_year":"2000","rating":"3.6","category":"Dramas","show_cast":"Bruce Willis, Matthew Perry, Rosanna Arquette, Michael Clarke Duncan, Natasha Henstridge, Amanda Peet, Kevin Pollak, Harland Williams","director":"Jonathan Lynn","summary":"When Oz's new neighbor proves to be a mobster on the run, Oz's scheming wife sends him to notify the mob boss -- and so the double-crosses begin.","poster":"http:\/\/netflixroulette.net\/api\/posters\/60000162.jpg","mediatype":0,"runtime":"N\/A"}]

const SearchResultRow = ({onResultClick, title, rating, category, cast, director, summary, poster})=>
    <tr onClick={onResultClick}>
      <td>{title}</td>
      <td>{rating}</td>
      <td>{category}</td>
      <td><img width="100" src={poster}/></td>
      {/* <td>{summary}</td> */}
      <td>{director}</td>
    </tr>

const ResultsTable = () =>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Rating</th>
        <th>Category</th>
        <th>Poster</th>
        <th>Summary</th>
        <th>Director</th>
      </tr>
    </thead>
    <tbody>
      {
        searchResultData.map((data, index)=>
          <SearchResultRow
            key={index}
            title={data.show_title}
            poster={data.poster}
            director={data.director}
            rating={data.rating}
            summary={data.summary}
            onResultClick={(e)=>console.log(index)}
           />
         )
      }
    </tbody>
  </table>

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Search for a movie by Title, Director, and Actor</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <label>
          Search:
          <input
            type="text"
            placeholder="Search..."
            onChange={onChange}
          />
        </label>

        <h2>Results</h2>
        <ResultsTable/>
      </div>
    );
  }
}

export default App;
