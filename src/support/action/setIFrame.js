import checkIfElementExists from '../lib/checkIfElementExists';/**
 * Set to a specific iFrame
 * @param  {String}   name The name of the iframe to set
 */
export default (name) => {    
	checkIfElementExists(name);
	browser.switchToFrame($(name));
	
};
