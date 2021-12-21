import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import PersonList from './PersonList'

// Create suite
describe('App', () => {
  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<App/>)
  })

  it('renders a person list', () => {
    // Arrange

    // Act
    const personList = appWrapper.find(PersonList)

    // Assert
    expect(personList).toHaveLength(1);
  })

  it('has a state', () => {
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  })

  it('has a people property in the state', () => {
    const appState = appWrapper.state();

    expect(appState.people).toBeDefined();
  });

  it('passes people state into personList props', () => {
    const personList = appWrapper.find(PersonList);

    expect(personList.props().people).toEqual(appWrapper.state().people);
  })
});
