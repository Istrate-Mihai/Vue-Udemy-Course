function getRandom(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      logMessageList: [],
      isBattleLogVisible: true
    }
  },
  computed: {
    monsterHealthBarStyles() {
      return {width: this.monsterHealth + '%'}
    },
    playerHealthBarStyles() {
      return {width: this.playerHealth + '%'}
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 != 0;
    }
  },
  watch: {
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // Draw
        this.winner = 'draw';
      }
      else if (value <= 0) {
        // Monster won
        this.winner = 'player';
      }
    },
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // Draw
        this.winner = 'draw';
      }
      else if (value <= 0) {
        // Player won
        this.winner = 'monster';
      }
    }
  },
  methods: {
    startGame() {
      this.monsterHealth       = 100;
      this.playerHealth        = 100;
      this.currentRound        = 0;
      this.winner              = null;
      this.logMessageList      = [];
      this.isBattleLogVisible  = true;
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandom(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage('Player', 'attack', attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandom(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage('Monster', 'monster-attack', attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandom(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('Player', 'special-attack', attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandom(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      }
      else {
        this.playerHealth += healValue;
      }
      this.addLogMessage('Player', 'heals', healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster';
      this.addLogMessage('Player', 'surrenders', '');
    },
    addLogMessage(who, what, value) {
      this.logMessageList.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    },
    getActionByClass(actionBy) {
      return {
        'log--player':  actionBy == 'Player',
        'log--monster': actionBy == 'Monster'
      }
    },
    getActionTypeClass(actionType) {
      return {
        'log--heal': actionType == 'heals',
        'log--damage': actionType == 'attack' || actionType == 'monster-attack',
        'log--special--damage': actionType == 'special-attack',
      }
    },
    getActionTypeMsg(actionType) {
      switch (actionType) {
        case 'heals':
          return 'heals himself by ';
          break;

        case 'attack':
          return 'launched attack on monster dealing ';
          break;

        case 'special-attack':
          return 'launched special attack on monster dealing ';
          break;

        case 'monster-attack':
          return 'launched attack on player dealing ';
          break;

        default:
          return '';
      }
    },
    getActionValueMsg(actionType) {
      if (actionType === 'surrenders') {
        return 'surrendered';
      }

      return 'points';
    },
    toggleBattleLog() {
      this.isBattleLogVisible = !this.isBattleLogVisible;
    }
  }
});

app.mount('#game');
