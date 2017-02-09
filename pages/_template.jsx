import React from 'react';
import { Link } from 'react-router';
import { Container, Grid, Span } from 'react-responsive-grid';
import includes from 'underscore.string/include';
import { prefixLink } from 'gatsby-helpers';
import { colors, activeColors, header, activeHeader } from 'utils/colors'
import { config } from 'config';

import typography from 'utils/typography';

// Style code
import 'css/base.css';

var rhythm = typography.rhythm, adjustFontSizeTo = typography.adjustFontSizeTo;

const color = (isActive) => ({
  background: isActive ? activeHeader.bg : header.bg,
  color: isActive ? activeColors.fg : header.fg,
});

const linkBase = {
  textDecoration: 'none',
  paddingTop: rhythm(1/2),
  paddingRight: rhythm(1/2),
  paddingBottom: rhythm(1/2),
  paddingLeft: rhythm(1/2),
  // marginTop: rhythm(-1),
  // marginBottom: rhythm(-1),
};

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render: function() {
    const aboutActive = includes(this.props.location.pathname, '/about/');

    return (
      <div>
        <div style={{background: header.bg, color: header.fg, marginBottom: '2.25em'}}>
          <Container style={{maxWidth: 960, padding: `0 ${rhythm(1/2)}`}}>
            <Grid columns={12} style={{padding: `${rhythm(1/2)} 0`}}>
              {/* Ugly hack. How better to constrain height of div?*/}
              <Span columns={3} style={{height: 24}} >
                <Link to={prefixLink('/')} style={{textDecoration: 'none', color: header.fg, fontSize: adjustFontSizeTo("21px").fontSize}}>
                  {config.siteTitle}
                </Link>
              </Span>
              <Span columns={9} last={true}>
                <a style={{float: 'right', color: header.fg, textDecoration: 'none', marginLeft: rhythm(1/2)}} href="https://github.com/spdpio">
                  Github
                </a>
                {/*<Link to={prefixLink('/about/')} style={Object.assign(color(aboutActive), linkBase)}>
                  About
                </Link>*/}
              </Span>
            </Grid>
          </Container>
        </div>
        {(this.props.location.pathname === '/' || this.props.location.pathname === '//') &&
          <div style={{background: colors.bg, marginTop: '-2.25em', color: '#fff', textAlign: 'center', padding: '5.5em 0.5em'}}>
            <h1><div style={{fontSize: '3.5em', marginBottom: '0.5em'}}>spdp</div></h1>
            <div style={{textTransform: 'uppercase', fontSize: '1.25em'}}>A side project development platform</div>
          </div>
        }
        <Container style={{maxWidth: 960, padding: `${rhythm(1)} ${rhythm(1/2)}`, paddingTop: 0}}>
          {this.props.children}
        </Container>
      </div>
    );
  }
});
