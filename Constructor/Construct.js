//? JS Constructor //
class coder{
    constructor(stack, platform){
        // let solver = 'hackerRank' + 'codeForce'; 
         this.stack = stack;
         this.platform = platform;

        // console.log(stack,platform);
        console.log(`Stack From ${stack} and Platform From ${platform}`);
    }
}

let programmer = new coder('CodeCheaf', 'LeetCode');