const StageApp = Vue.createApp({
  data() {
    return {
      /* 送信ボタン上下に表示されるメッセージ */
      okMessage: '正解！',
      ngMessage: 'そのキーワードは違うようだぞ！？',
      /* 解答 */
      stage101CorrectAnswer: '1',
      stage102CorrectAnswer: '2',
      stage103CorrectAnswer: '3',
      stage104CorrectAnswer: '5',
      stage105CorrectAnswer: '4',
      stage2CorrectAnswer: '7',
      stage301CorrectAnswer: '花',
      stage302CorrectAnswer: '森',
      stage4CorrectAnswer: '2',
      stage5CorrectAnswer: 'password',
      /* stage1 */
      stage1Answer: false, // 正解かどうか
      stage101: '',        // インプットエリアの入力の値
      stage102: '',
      stage103: '',
      stage104: '',
      stage105: '',
      stage1Message: '',   // 送信ボタン上下に表示されるメッセージ
      stage1Clear: false,  // ステージクリア
      /* stage2 */
      stage2Answer: false, // 正解かどうか
      stage2: '',          // インプットエリアの入力の値
      stage2Message: '',   // 送信ボタン上下に表示されるメッセージ
      stage2Clear: false,  // ステージクリア
      /* stage3 */
      stage3Answer: false, // 正解かどうか
      stage301: '',        // インプットエリアの入力の値
      stage302: '',
      stage3Message: '',   // 送信ボタン上下に表示されるメッセージ
      stage3Clear: false,  // ステージクリア
      /* stage4 */
      stage4Answer: false, // 正解かどうか
      stage4: '',          // インプットエリアの入力の値
      stage4Message: '',   // 送信ボタン上下に表示されるメッセージ
      stage4Clear: false,  // ステージクリア
      /* stage5 */
      stage5Answer: false, // 正解かどうか
      stage5: '',          // インプットエリアの入力の値
      stage5Message: '',   // 送信ボタン上下に表示されるメッセージ
      stage5Clear: false,  // ステージクリア
    }
  },
  methods: {
    /* stage1の入力を判定します */
    stage1AnswerInput(stage101, stage102, stage103, stage104, stage105) {
      if(stage101 === this.stage101CorrectAnswer
        && stage102 === this.stage102CorrectAnswer
        && stage103 === this.stage103CorrectAnswer
        && stage104 === this.stage104CorrectAnswer
        && stage105 === this.stage105CorrectAnswer
        ) {
        this.stage1Answer = true;
        this.stage1Message = '';
      } else {
        this.stage1Answer = false;
        this.stage1Message = this.ngMessage;
      }
    },
    /* stage1のクリア画面の動作を設定します */
    stage1NextStage() {
      this.stage1Answer = false;
      this.stage1Clear = true;
    },
    /* stage2の入力を判定します */
    stage2AnswerInput(stage2) {
      if(stage2 === this.stage2CorrectAnswer) {
        this.stage2Answer = true;
        this.stage2Message = this.okMessage;
      } else {
        this.stage2Answer = false;
        this.stage2Message = this.ngMessage;
      }
    },
    /* stage2のクリア画面の動作を設定します */
    stage2NextStage() {
      this.stage2Answer = false;
      this.stage2Clear = true;
    },
    /* stage3の入力を判定します */
    stage3AnswerInput(stage301, stage302) {
      if(stage301 === this.stage301CorrectAnswer
        && stage302 === this.stage302CorrectAnswer
        ) {
        this.stage3Answer = true;
        this.stage3Message = '';
      } else {
        this.stage3Answer = false;
        this.stage3Message = this.ngMessage;
      }
    },
    /* stage3のクリア画面の動作を設定します */
    stage3NextStage() {
      this.stage3Answer = false;
      this.stage3Clear = true;
    },
    /* stage4の入力を判定します */
    stage4AnswerInput(stage4) {
      if(stage4 === this.stage4CorrectAnswer
        ) {
        this.stage4Answer = true;
        this.stage4Message = '';
      } else {
        this.stage4Answer = false;
        this.stage4Message = this.ngMessage;
      }
    },
    /* stage4のクリア画面の動作を設定します */
    stage4NextStage() {
      this.stage4Answer = false;
      this.stage4Clear = true;
    },
     /* stage5の入力を判定します */
    stage5AnswerInput(stage5) {
      if(stage5 === this.stage4CorrectAnswer
        ) {
        this.stage5Answer = true;
        this.stage5Message = '';
        window.location.href = 'final.html';
      } else {
        this.stage5Answer = false;
        this.stage5Message = this.ngMessage;
      }
    },    
  }
}).mount('#stage')
