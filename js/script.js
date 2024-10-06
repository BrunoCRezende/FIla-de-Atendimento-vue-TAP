new Vue({
    el: '#app',
    data: {
        normalQueue: [],
        specialQueue: [],
        senhaNormalCounter: 1,
        senhaEspecialCounter: 1,
        currentPassword: null
    },
    computed: {
        combinedQueue() {
            return [...this.specialQueue, ...this.normalQueue];
        }
    },
    methods: {
        addToNormalQueue() {
            const senha = `N${this.senhaNormalCounter.toString().padStart(3, '0')}`;
            this.normalQueue.push(senha);
            this.senhaNormalCounter++;
        },
        addToSpecialQueue() {
            const senha = `E${this.senhaEspecialCounter.toString().padStart(3, '0')}`;
            this.specialQueue.push(senha);
            this.senhaEspecialCounter++;
        },
        attendNormalQueue() {
          if (this.specialQueue.length > 0) {
                this.attendSpecialQueue();
            } else if (this.normalQueue.length > 0) {
                this.currentPassword = this.normalQueue.shift();
            } else {
                this.currentPassword = "Nenhuma senha na fila.";
            }
        },
        attendSpecialQueue() {
            if (this.specialQueue.length > 0) {
                this.currentPassword = this.specialQueue.shift();
            } else {
                this.currentPassword = "Nenhuma senha especial na fila.";
            }
        }
    }
});