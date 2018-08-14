const buttons = document.querySelectorAll(".buttons");
const display = document.getElementById('display');

	let calculator = {
			result: '',
			operate: function () {
				this.result = Math.round(eval(this.result)*10000) / 10000 + '';
			},
			add: function (chr) {
				this.result = this.result + chr;
			},
			clear: function () {
				this.result = this.result.slice(0, this.result.length -1);
			},
			ac: function () {
				this.result = '';
			},
			displayResult: function () {
				return this.result;
			}
		};

		buttons.forEach(function (btn) {
			btn.addEventListener('click' , function (e) {
				let data = e.target.getAttribute('data')
				if (data == 'ac') calculator.ac();
				else if (data == 'clear') calculator.clear();
				else if (data == '=') calculator.operate();
				else if (data == '+' || data == '-'|| data == '*' || data == '/' || data == '.') {
					let result = calculator.displayResult();
					if (result[result.length - 1] != data) calculator.add(data);
				}
				else {
					calculator.add(data);
				}

				let round_result = calculator.displayResult();
				if (round_result == '') display.textContent = '0';
				else if (round_result == 'Infinity') {
					display.textContent = 'Infinity';
					calculator.ac();
				}
				else display.textContent = calculator.displayResult();
			})
		})
