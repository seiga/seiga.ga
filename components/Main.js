import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="accounts" className={`${this.props.article === 'accounts' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">accounts</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <ul>
            <li><a href="https://github.com/seiga" target="_blank">GitHub</a></li>
            <li><a href="https://qiita.com/Seiga" target="_blank">Qiita</a></li>
            <li><a href="https://twitter.com/seiga_hayashi" target="_blank">Twitter</a></li>
          </ul>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image left"><img src="/static/images/geekjob_camp.png" alt="https://learn.geekjob.jp" target="_blank" /></span>
          <p>Launched membership programming learning service. As a leader, I was responsible for almost everything from needs-analysis to team-management and front&backend coding with Rails. I also made a programming learning curriculum and worked as a lecturer.</p>
          <span className="image right"><img src="/static/images/for_geek.png" alt="https://www.geekjob.jp/" target="_blank" /></span>
          <p>It is a company blog by Wordpress. I was in charge of everything from design ordering to plug-in customization.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image left"><img src="/static/images/face_pic.jpg" alt="" /></span>
          <ul className="alt">
          <li>Name: Seiga Hayashi / 林 星河</li>
          <li>Age: 26</li>
          <li>Habitat: Mitaka.Tokyo.Japan</li>
          </ul>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>This mailing service is not working now.</p>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main
