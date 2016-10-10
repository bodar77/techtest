namespace techtest {

    export class application {

        constructor () {

        }

        private tasks: Company[];

        public addTask(company: Company) : void {
            this.tasks.push(company);
        }

        private processTasks() : void {
            this.tasks.forEach(company => {
                company.RenderUpdate();
            });
        }

    }
}