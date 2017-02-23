class TributePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = {
      HeaderTitle: "Mothers of Technology",
      MainHeading: "Hedy Lamar",
      MainSubHeading: "Wireless Visionary",
      FirstSubHeading: "Her impact on technology",
      SecondSubHeading: "Where is she now?",
      ParagraphOne: "Largely known as a screen star of the 1920s, Hedy Lamarr proved to be more than just a pretty face. She played a key role in the invention of spread-spectrum technology; specifically, by conceptualizing the idea of frequency hopping, which is a method of sending radio signals from different frequency channels.",
      ParagraphTwo: "Lamarr and her co-inventor, George Antheil, developed the technology originally to help the Navy remotely control torpedoes. The key value of frequency hopping was that the randomized channel switching made it difficult for outside agents to understand what was being communicated. It was, in essence, an early form of encryption technology.",
      ParagraphThree: "The two received a patent on their idea on August 11, 1942, according to the American Heritage of Invention &amp; Technology. But despite lobbying and fundraising efforts on their part, the Navy ultimately passed on the technology.",
      ParagraphFour: "It was reborn, however, in the late 1950s when engineers at Sylvania Electronic Systems Division revived it, which led to the use of Lamarr’s frequency hopping concept in secure military communications. Her work on spread-spectrum has played a part in many modern wireless technologies, such as Bluetooth, Wi-Fi and Code Division Multiple Access (CDMA).",
      ParagraphFive: "After initially receiving very little recognition for her work on spread-spectrum technology, Lamarr was honored with a special award: the Pioneer Award by the Electronic Frontier Foundation in 1997. This long overdue recognition for her scientific endeavors came just three years before her death, in 2000.",
      ParagraphSix: "Her legacy lives on in the world of wireless technologies, and through the continued efforts of her son Anthony Loder. He recently spoke with CBS News about his mother’s gift for invention, which is the subject of Hedy’s Folly, a new book by Pulitzer Prize–winning writer Richard Rhodes.",
      QuoteHeading: "Words of Wisdom",
      Quote: "When they called her up to tell her she would get the award, her first words were, Hedy Lamarr being Hedy Lamarr, ‘Well, it's about time.",
      QuoteAuthor: "Writer Richard Rhodes recalls Lamarr's response to her award in an NPR story",
      Learn: "Learn more about Hedy Lamarr on",
      NewspaperLink: "This webpage is based on this ",
      Links: "Find me on "
    }

    return (
      <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
        <Header data={data} />
        <div className="demo-ribbon"></div>
        <Main data={data} />
      </div>
    )
  }
}

function Header(props) {
  const {data} = props;
  return (
    <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">{data.HeaderTitle}</span>
        <div className="mdl-layout-spacer"></div>
      </div>
    </header>
  )
}

Header.propTypes = {
  HeaderTitle: React.PropTypes.string
}

function Main(props) {
  const {data} = props;
  return (
    <main className="demo-main mdl-layout__content">
      <div className="demo-container mdl-grid">
        <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
        <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
          <h1>{data.MainHeading}</h1>
          <h5>{data.MainSubHeading}</h5>
          <h6>{data.FirstSubHeading}</h6>
          <div className="content-grid mdl-grid">
            <div className="content-column mdl-cell mdl-cell--12-col">
            <p>{data.ParagraphOne}</p>
            <p>{data.ParagraphTwo}</p>
            <p>{data.ParagraphThree}</p>
            <p>{data.ParagraphFour}</p>
            </div>
          </div>
          <h6>{data.SecondSubHeading}</h6>
          <div className="content-grid mdl-grid">
            <div className="content-column mdl-cell mdl-cell--8-col">
              <p>{data.ParagraphFive}</p>
              <p>{data.ParagraphSix}</p>
            </div>
            <div className="content-column mdl-cell mdl-cell--4-col">
              <img src="https://speakingupforus.files.wordpress.com/2012/11/462px-hedy_lamarr-algiers-38.jpg?w=185&h=240" alt="Image of Hedy Lamar" />
            </div>
          </div>

          <h6>{data.QuoteHeading}</h6>
          <blockquote>{data.Quote}</blockquote>
          <p className="layout">{data.QuoteAuthor}</p>

          <span>{data.Learn}</span>
          <a href="https://en.wikipedia.org/wiki/Hedy_Lamarr" target="_blank"><i className="fa fa-wikipedia-w fa-2x"></i></a>
          <a href="http://www.imdb.com/name/nm0001443/" target="_blank"><i className="fa fa-film fa-2x"></i></a>
          <a href="https://en.wikiquote.org/wiki/Hedy_Lamarr" target="_blank"><i className="fa fa-quote-right fa-2x"></i></a>
        </div>
      </div>
      <Footer data={data}/>
    </main>
  )
}

Main.propTypes = {
  MainHeading: React.PropTypes.string,
  MainSubHeading: React.PropTypes.string,
  FirstSubHeading: React.PropTypes.string,
  SecondSubHeading: React.PropTypes.string,
  ParagraphOne: React.PropTypes.string,
  ParagraphTwo: React.PropTypes.string,
  ParagraphThree: React.PropTypes.string,
  ParagraphFour: React.PropTypes.string,
  ParagraphFive: React.PropTypes.string,
  ParagraphSix: React.PropTypes.string,
  QuoteHeading: React.PropTypes.string,
  Quote: React.PropTypes.string,
  QuoteAuthor: React.PropTypes.string,
  Learn: React.PropTypes.string
}

function Footer(props) {
  const {data} = props;
  return (
    <footer className="demo-footer mdl-mini-footer">
      <div className="mdl-mini-footer--right-section">
        <ul className="mdl-mini-footer--link-list">
          <li>{data.NewspaperLink}<a href="http://www.biztechmagazine.com/article/2012/05/mothers-technology-10-women-who-invented-and-innovated-tech" target="_blank"><i className="fa fa-newspaper-o fa-2x"></i></a></li>
          <li>{data.Links}<a href="https://sonyamoisset.github.io/" target="_blank"><i className="fa fa-chrome fa-2x"></i></a>
          <a href="https://github.com/SonyaMoisset" target="_blank"><i className="fa fa-github fa-2x"></i></a>
          <a href="http://codepen.io/SonyaMoisset/" target="_blank"><i className="fa fa-codepen fa-2x"></i></a>
          <a href="https://twitter.com/SonyaMoisset" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
          <a href="https://medium.com/@sonya.moisset" target="_blank"><i className="fa fa-medium fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/sonyamoisset" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a></li>
        </ul>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  NewspaperLink: React.PropTypes.string,
  Links: React.PropTypes.string
}

ReactDOM.render(
  <TributePage />,
  document.getElementById('root')
);
