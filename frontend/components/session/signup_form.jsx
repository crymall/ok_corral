import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        email: '',
        password: '',
        zip: '',
        age: 18,
        gender: 'woman',
        orientation: 'straight'
      },
      ind: 1
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.incrementIndex = this.incrementIndex.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn) {
      this.props.history.push('/users');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state.user;
    this.props.processForm(user);
  }

  handleInput(type) {
    const old_state = this.state;

    return e => this.setState(
      merge({}, old_state, {user: {[type]: e.currentTarget.value}}))
  }

  incrementIndex(e) {
    e.preventDefault();

    const old_state = this.state;
    const next_ind = this.state.ind + 1

    this.setState(
      merge({}, old_state, {ind: next_ind})
    );
  }

  renderErrors() {
    if (this.props.errors.responseJSON) {
      return (
        <ul>
          {this.props.errors.responseJSON.map((error, idx) => {
            return (
              <li key={`error-${idx}`}>
                {error}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return null;
    }
  }

  render() {

    const page1 = (
        <form onSubmit={this.incrementIndex}>
          <p>
          Welcome to the best meet n&#39; greet this side of the Mississippi.
          We're pleased to meet you, and pleased to help you find your sweetheart.
          </p>

          <p>But first, let's get down to brass tacks.</p>

          <p>You are a...</p>
          <select name='user' value={this.state.value} onChange={this.handleInput('orientation')}>
            <option value='straight'>Straight</option>
            <option value='gay'>Gay</option>
            <option value='queer'>Bi/Queer</option>
          </select>
          <select name='user' value={this.state.value} onChange={this.handleInput('gender', this)}>
            <option value='woman'>Woman</option>
            <option value='man'>Man</option>
            <option value='more'>Nonbinary</option>
          </select>
          <button type='submit' value='submit'>Continue</button>
        </form>
    );

    const page2 = (
      <form onSubmit={this.incrementIndex} className="reg-text-form">
        <div className='inputs'>
          <label>
            <div className='labeltext'>Age</div>
            <select className='ageselect' name='user' value={this.state.value} onChange={this.handleInput('age')}>
              <option value='18'>18</option>
              <option value='19'>19</option>
              <option value='20'>20</option>
              <option value='21'>21</option>
              <option value='22'>22</option>
              <option value='23'>23</option>
              <option value='24'>24</option>
              <option value='25'>25</option>
              <option value='26'>26</option>
              <option value='27'>27</option>
              <option value='28'>28</option>
              <option value='29'>29</option>
              <option value='30'>30</option>
              <option value='31'>31</option>
              <option value='32'>32</option>
              <option value='33'>33</option>
              <option value='34'>34</option>
              <option value='35'>35</option>
              <option value='36'>36</option>
              <option value='37'>37</option>
              <option value='38'>38</option>
              <option value='39'>39</option>
              <option value='40'>40</option>
              <option value='41'>41</option>
              <option value='42'>42</option>
              <option value='43'>43</option>
              <option value='44'>44</option>
              <option value='45'>45</option>
              <option value='46'>46</option>
              <option value='47'>47</option>
              <option value='48'>48</option>
              <option value='49'>49</option>
              <option value='50'>50</option>
              <option value='51'>51</option>
              <option value='52'>52</option>
              <option value='53'>53</option>
              <option value='54'>54</option>
              <option value='55'>55</option>
              <option value='56'>56</option>
              <option value='57'>57</option>
              <option value='58'>58</option>
              <option value='59'>59</option>
              <option value='60'>60</option>
              <option value='61'>61</option>
              <option value='62'>62</option>
              <option value='63'>63</option>
              <option value='64'>64</option>
              <option value='65'>65</option>
              <option value='66'>66</option>
              <option value='67'>67</option>
              <option value='68'>68</option>
              <option value='69'>69</option>
              <option value='70'>70</option>
              <option value='71'>71</option>
              <option value='72'>72</option>
              <option value='73'>73</option>
              <option value='74'>74</option>
              <option value='75'>75</option>
              <option value='76'>76</option>
              <option value='77'>77</option>
              <option value='78'>78</option>
              <option value='79'>79</option>
              <option value='80'>80</option>
              <option value='81'>81</option>
              <option value='82'>82</option>
              <option value='83'>83</option>
              <option value='84'>84</option>
              <option value='85'>85</option>
              <option value='86'>86</option>
              <option value='87'>87</option>
              <option value='88'>88</option>
              <option value='89'>89</option>
              <option value='90'>90</option>
              <option value='91'>91</option>
              <option value='92'>92</option>
              <option value='93'>93</option>
              <option value='94'>94</option>
              <option value='95'>95</option>
              <option value='96'>96</option>
              <option value='97'>97</option>
              <option value='98'>98</option>
              <option value='99'>99</option>
              <option value='100'>100</option>
            </select>
          </label>
          <label>
            <div className='labeltext'>Zip Code</div>
            <input type='text' name='user' onChange={this.handleInput('zip')} value={`${this.state.user.zip}`} />
          </label>
          <label>
            <div className='labeltext'>Email Address</div>
            <input type='text' name='user' onChange={this.handleInput('email')} value={`${this.state.user.email}`} />
          </label>
        </div>
        <button className='textbutton' type='submit' value='submit'>Next</button>
      </form>
    );

    const page3 = (
      <form onSubmit={this.handleSubmit} className="reg-text-form">
        <div className='inputs'>
          <label>
            <div className='labeltext'>Username</div>
            <input type='text' name='user' onChange={this.handleInput('username')} value={`${this.state.user.username}`} />
          </label>
          <label>
            <div className='labeltext'>Password</div>
            <input name='user' className='password-reg' type='password' onChange={this.handleInput('password')} value={`${this.state.user.password}`} />
          </label>
        </div>
        <button className='textbutton' type='submit' value='submit'>Yeehaw!</button>
      </form>
    );

    if (this.state.ind === 1) {
      return (
        <div className="homepage-reg">
          <div className="homepage-body">
            <h1 className='front-head'>HOWDY, PARTNER.</h1>
            { this.renderErrors() }
            { page1 }
          </div>
        </div>
      );
    }
    else if (this.state.ind === 2) {
      return (
        <div className="homepage-reg">
          <div className="homepage-body">
            <h1 className='front-head'>ALMOST THERE...</h1>
            { this.renderErrors() }
            { page2 }
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="homepage-reg">
          <div className="homepage-body">
            <h1 className='front-head'>JUST ONE MORE.</h1>
            { this.renderErrors() }
            { page3 }
          </div>
        </div>
      );
    }
  }

}

export default withRouter(SignupForm);
