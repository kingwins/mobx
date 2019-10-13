import {observable} from 'mobx'
import axios from 'axios'

class store {
  // @observable schools = [{name:"blah blah blah", id:1}, {name:"blah blah blah", id:2}, {name:"blah blah blah", id:3}, {name:"blah blah blah", id:4}, {name:"blah blah blah", id:5}, {name:"blah blah blah", id:6}]
  // @observable courts = [{full_name:"blah blah blah", id:1}, {full_name:"blah blah blah", id:2}, {full_name:"blah blah blah", id:3}, {full_name:"blah blah blah", id:4}, {full_name:"blah blah blah", id:5}, {full_name:"blah blah blah", id:6}]
  @observable schools = []
  @observable courts = []
  
  getSchools(){
    axios.get('https://www.courtlistener.com/api/rest/v3/schools/')
      .then(res => {
        this.schools.replace(res.data.results)
      })
  }
  getCourts(){
    axios.get('https://www.courtlistener.com/api/rest/v3/courts/')
      .then(res => {
        this.courts.replace(res.data.results)
      })
  }
}

export default new store



