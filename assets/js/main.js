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
      stage104CorrectAnswer: '4',
      stage105CorrectAnswer: '5',
      stage2CorrectAnswer: 'いいい',
      stage3CorrectAnswer: 'ううう',
      stage4CorrectAnswer: 'えええ',
      stage5CorrectAnswer: 'おおお',
      /* stage1 */
      stage1Answer: false, // 正解かどうか
      stage101: '',          // インプットエリアの入力の値
      stage102: '',
      stage103: '',
      stage104: '',
      stage105: '',
      stage1Message: '',   // 送信ボタン上下に表示されるメッセージ
      stage1Clear: false,  // ステージクリア
      /* stage2 */
      stage2Answer: false, // 正解かどうか
      stage202Answer: false,
      stage203Answer: false,
      stage204Answer: false,
      stage2: '',          // インプットエリアの入力の値
      stage202: '',
      stage203: '',
      stage204: '',
      stage201Message: '',  // 送信ボタン上下に表示されるメッセージ
      stage202Message: '',
      stage203Message: '',
      stage204Message: '',
      stage2Clear: false,  // ステージクリア
      /* stage3 */
      stage3Answer: false, // 正解かどうか
      stage3: '',        // インプットエリアの入力の値
      stage302: '',
      stage303: '',
      stage304: '',
      stage305: '',
      stage306: '',
      stage3Message: '',  // 送信ボタン上下に表示されるメッセージ
      stage3Clear: false, // ステージクリア
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
        this.stage3Answer = false;
        this.stage3Message = this.ngMessage;
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
    stage202AnswerInput(stage202) {
      if(stage202 === this.stage202CorrectAnswer) {
        this.stage202Answer = true;
        this.stage202Message = this.okMessage;
      } else {
        this.stage202Answer = false;
        this.stage202Message = this.ngMessage;
      }
    },
    stage203AnswerInput(stage203) {
      if(stage203 === this.stage203CorrectAnswer) {
        this.stage203Answer = true;
        this.stage203Message = this.okMessage;
      } else {
        this.stage203Answer = false;
        this.stage203Message = this.ngMessage;
      }
    },
    stage204AnswerInput(stage204) {
      if(stage204 === this.stage204CorrectAnswer) {
        this.stage204Answer = true;
        this.stage204Message = this.okMessage;
      } else {
        this.stage204Answer = false;
        this.stage204Message = this.ngMessage;
      }
    },
    /* stage2のクリア画面の動作を設定します */
    stage2NextStage() {
      this.stage2Answer = false;
      this.stage2Clear = true;
    },
    /* stage3の入力を判定します */
    stage3AnswerInput(stage301, stage302, stage303, stage304, stage305, stage306) {
      if(stage301 === this.stage301CorrectAnswer
        && stage302 === this.stage302CorrectAnswer
        && stage303 === this.stage303CorrectAnswer
        && stage304 === this.stage304CorrectAnswer
        && stage305 === this.stage305CorrectAnswer
        && stage306 === this.stage306CorrectAnswer
        ) {
        this.stage3Answer = true;
        this.stage3Message = '';
        window.location.href = 'final.html';
      } else {
        this.stage3Answer = false;
        this.stage3Message = this.ngMessage;
      }
    },
  }
}).mount('#stage')
