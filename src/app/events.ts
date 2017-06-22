export class ButtonClickEvent {
  text = ""
  constructor( text: string){
    this.text = text;
  }
}

export interface OnButtonClickListener {
  onButtonClick({text:String})
}

export function isOnButtonClickListener(arg: any): arg is OnButtonClickListener {
  return (arg as OnButtonClickListener).onButtonClick !== undefined;
}
