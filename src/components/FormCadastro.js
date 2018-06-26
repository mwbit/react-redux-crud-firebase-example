import React, { Component , Fragment} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {modifyYourName,modifyYourBio,modifyPrimarySkill,
        modifyJSLib,modifyTdd,modifyHeroku,
        modifyGithub,modifyStartDate} from '../actions/FormActions'


const formCadastro = props =>{
    console.log(props)
    return (
        <Fragment>
            <div className="container justify-content-center border col-6 mt-5">
                <div className="row border bg-light" >
                    <h4 className=" mt-2 ml-2">User</h4>
                </div>
                <div className="row" >
                     {/*  Poderia ter sido usado o redux-form para facilitar o desenvolvimento, porém foi usado essa abordagem para expor todo o ciclo do redux   */ }
                    <form className="col-12">
                        <div className="form-group mt-3">
                            <div className="row col-12 mb-2" >
                                <label for="nome">Your Name</label>
                                <input type="text" className="form-control" value={props.yourName} name="yourName" placeholder="YourName" onChange ={props.modifyYourName} />
                            </div>    
                            <div className="row col-12 mb-2 mt-3" >
                                <label for="nome">Your Bio</label>
                                <textarea className="form-control" rows="4" value={props.yourBio} name="yourBio" placeholder="Your Bio" onChange ={props.modifyYourBio} />
                            </div>    
                            <div className="row col-md-12 mb-2 mt-3" >
                                <label for="primarySkill">Primary Skill</label>
                                <select className="form-control" name="primarySkill" value={props.primarySkill} onChange ={props.modifyPrimarySkill} >
                                    <option value='' disabled >Selecione</option>
                                    <option value='JavaScript'>JavaScript</option>
                                    <option value='Ruby'>Ruby</option>
                                    <option value='Python'>Python</option>
                                    <option value='Go' >Go</option>
                                </select>                                   
                            </div> 
                            <div className="row col-12 mb-2 mt-3" >
                                <label for="nome">Javascript library of choice</label>
                                <div class="form-check  col-12 mb-2">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" value ={props.javaScriptLibrary} name="javaScriptLibrary" id="react" value="react" onChange ={props.modifyJSLib}/>
                                        React
                                    </label>
                                </div>
                                <div class="form-check col-12 mb-2">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" value ={props.javaScriptLibrary} name="javaScriptLibrary" id="angular" value="angular" onChange ={props.modifyJSLib}/>
                                        Angular
                                    </label>
                                </div>
                                <div class="form-check col-12 mb-2">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" value ={props.javaScriptLibrary} name="javaScriptLibrary" id="vue" value="vue" onChange ={props.modifyJSLib}/>
                                        Vue
                                    </label>
                                </div>
                            </div> 
                            <div className="row col-12 mt-2" >
                                <label for="nome">Additional Experience</label>
                            </div>    
                            <div className="row col-12 mb-2 " >
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value={props.tdd} name="tdd" onChange ={props.modifyTdd}/>
                                            TDD
                                    </label>
                                </div>
                            </div>    
                            <div className="row col-12 mb-2 " >
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input"  value={props.heroku} name="heroku" onChange ={props.modifyHeroku}/>
                                            Heroku
                                    </label>
                                </div>
                            </div>    
                            <div className="row col-12 mb-2 " >
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value={props.github} name="github" onChange ={props.modifyGithub}/>
                                            Github
                                    </label>
                                </div>
                            </div>    
                            <div className="row col-6 mb-5 mt-3" >
                                <label for="nome">Start Date</label>
                                <input type="date" className="form-control" value = {props.startDate} name="startDate" onChange ={props.modifyStartDate} />
                            </div>    

                            <div className="mb-3 d-flex">
                                <button type="submit" className="btn btn-primary  mr-2">Submmit</button>
                            </div>  
                    </div>                
                    </form>
                </div>  
            </div>
        </Fragment>   
     
    )
}

function mapStateToProps(state) {
    return {
        yourName: state.FormReducer.yourName, 
        yourBio: state.FormReducer.yourBio,
        primarySkill: state.FormReducer.primarySkill,
        javaScriptLibrary: state.FormReducer.javaScriptLibrary,
        tdd: state.FormReducer.tdd,
        heroku: state.FormReducer.heroku,
        github: state.FormReducer.github,
        startDate: state.FormReducer.startDate
    }
}


function mapDispatchToProps (dispatch){
    return bindActionCreators({modifyYourName,modifyYourBio,modifyPrimarySkill,
        modifyJSLib,modifyTdd,modifyHeroku,
        modifyGithub,modifyStartDate},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(formCadastro)