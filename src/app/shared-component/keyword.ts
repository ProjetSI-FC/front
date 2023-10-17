export class Keyword {
    constructor(public word: string, public selected?: boolean){
      if (selected === undefined) selected = false;
    }
  }