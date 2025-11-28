import { makeAutoObservable } from "mobx";
class counterStore{
  count=0;
  constructor(){
    makeAutoObservable(this);
  }
  increment(){
    this.count+=1;
  }
  decrement(){
    this.count-=1
  }
}
const counterStore=new.counterStore();
export default counterStore