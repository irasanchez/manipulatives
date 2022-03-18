class Lexer {
    constructor(data) {
      this.keyWords = {
        for: true,
        let: true,
        break: true,
        if: true,
        while: true,
      };
      this.operators = {
        '<': true,
        '>': true,
        '++': true,
      };
      this.numbers = {
        '0': true,
        '1': true,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6': true,
        '7': true,
        '8': true,
        '9': true,
        '10': true,
      };
      this.data = data.split(' ');
      this.symbols = ['(', ')', '{', '}'];
      this.lex = [];
  
      this.buildLex();
    }
    isKeyWord(string) {
      return this.keyWords[string] ? true : false;
    }
    isManipulative(string) {
      // let isNotKeyWord = !this.isKeyWord(string);
      if (
        string.includes('i++') ||
        string.includes('i--') ||
        string.includes('1') ||
        string.includes('0')
      ) {
        return true;
      }
      return false;
    }
    buildExpression() {
      let lexed = [];
      let expression = {
        expression: true,
        start: '(',
        end: ')',
        content: [],
      };
      let buildingExpression = false;
      let expressionPart = { inExpression: true };
      for (let i = 0; i < this.data.length; i++) {
        let part = this.data[i];
  
        if (/\(/.test(part)) {
          // check for (
          buildingExpression = true;
          expression.content.push({ ...expressionPart, text: part });
        } else if (buildingExpression) {
          if (/\)/.test(part)) {
            // check for )
            expression.content.push({ ...expressionPart, text: part });
            expression.content = expression.content.map((expressionPiece) => {
              return {
                ...expressionPiece,
                manipulative: this.isManipulative(expressionPiece.text),
              };
            });
            lexed.push(expression);
            buildingExpression = false;
            expression = {
              start: '(',
              end: ')',
              content: [],
            };
          } else {
            expression.content.push({ ...expressionPart, text: part });
          }
        }
      }
      return lexed;
    }
    buildBlock() {
      let lexed = [];
      let block = {
        block: true,
        start: '{',
        end: '}',
        content: [],
      };
      let buildingBlock = false;
      let blockPart = { inBlock: true };
      for (let i = 0; i < this.data.length; i++) {
        let part = this.data[i];
  
        if (/\{/.test(part)) {
          // check for (
          buildingBlock = true;
          block.content.push({ ...blockPart, text: part });
        } else if (buildingBlock) {
          if (/\}/.test(part)) {
            // check for )
            block.content.push({ ...blockPart, text: part });
            block.content = block.content.map((blockPiece) => {
              return {
                ...blockPiece,
                manipulative: this.isManipulative(blockPiece.text),
              };
            });
            lexed.push(block);
            buildingBlock = false;
            block = {
              start: '(',
              end: ')',
              content: [],
            };
          } else {
            block.content.push({ ...blockPart, text: part });
          }
        }
      }
      return lexed;
    }
    buildLex() {
      // flesh out get keyWords function to handle multiple keywords
      let keyWord = [{ text: this.data[0], isKeyWord: true }];
      let expression = this.buildExpression();
      let block = this.buildBlock();
      this.lex = { keyWord, expression, block };
    }
    getLex() {
      return this.lex;
    }
  }

  export default Lexer
  
  