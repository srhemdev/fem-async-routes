/* eslint-env mocha */

//React components are pretty slow to test
const { expect } = require('chai') //assertion lib
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow, mount } = require('enzyme')
const {shows} = require('../data.json')

describe('<Search/>', () => {
  it('should pass', () => {
    expect(1+1 === 2).to.be.true
  })

  it('should render the brand', () => {
    const wrapper = shallow(<Search/>)
    console.log(wrapper.debug());
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true;
  })

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search/>)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length);
  })

  //Test filtering(narrowing search results) with Mount
  //we can use static rendering
  it('should fitter correctly given new state', () => {
    const wrapper = mount(<Search/>)
    const input = wrapper.find('.search-input');
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house');
    expect(wrapper.find('.show-card').length).to.equal(1);
  })
});
//Search.myFilter()
