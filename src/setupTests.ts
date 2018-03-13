import * as Enzyme from 'enzyme';
import 'jest-enzyme';
import 'raf/polyfill';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });