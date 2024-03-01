<script>
export default {
  name: "Heading1",
  data() {
    return {};
  },
  props: {
    blocksIndex: {
      type: Number,
    },
  },
};

/*
<template>
	<div class="Heading1">
		<el-input
			type="textarea"
			autosize
			v-model="mValue.text"
			placeholder="标题1"
			@keydown.native="addNewTextBlock($event,BlocksIndex)"
			@keyup.native="nextFocus($event,BlocksIndex)"
			
		></el-input>
	</div>
</template>

<script>
export default {
	name: "Heading1",
	props: ["value", "BlocksIndex"],
	data() {
		return {
			mValue: this.value,
			cursorStart: 0,
			isEmptyDelete: true
		};
	},
	watch: {
		mValue(val) {
		
			this.$emit("input", val);
		},
		value(val) {
			this.mValue = val;
		}
	},
	methods: {
		addNewTextBlock(event, index) {
		

			let dom = document.getElementsByTagName("textarea");
			let currInput = dom[index];
			let startPos = currInput.selectionStart;
			this.cursorStart = startPos;

			if (event.keyCode == 13) {
				event.preventDefault();

				// 新建text-item到vuex里
				let addBlockInfo = {
					index: index,
					blockItem: {
						type: "text",
						data: {
							text: ""
						}
					}
				};
				
				let dom = document.getElementsByTagName("textarea");
				let currInput = dom[index];
				let startPos = currInput.selectionStart;

				if (startPos != this.mValue.text.length) {
					addBlockInfo.blockItem.data.text = this.mValue.text.slice(
						startPos,
						this.mValue.text.length
					);
					this.mValue.text = this.mValue.text.slice(0, startPos);
				}

				
				this.$store.commit(
					"mutationAddCurrentPageBlocks",
					addBlockInfo
				);
			}
		},
		nextFocus(event, index) {
			let dom = document.getElementsByTagName("textarea");
			let currInput = dom[index];
			let nextInput = dom[index + 1];
			let lastInput = dom[index - 1];
		
			if (event.keyCode == 13) {
				// console.log(nextInput);
				event.preventDefault();
				nextInput.focus();
			}
			if (event.keyCode == 38) {
				lastInput.setSelectionRange(this.cursorStart, this.cursorStart);
				setTimeout(() => {
					lastInput.focus();
				}, 100);
			}
			if (event.keyCode == 40) {
				nextInput.setSelectionRange(this.cursorStart, this.cursorStart);
				setTimeout(() => {
					nextInput.focus();
				}, 100);
			}
			if (event.keyCode == 46 || event.keyCode == 8) {
				if (
					currInput.value == "" &&
					this.currentPageBlocks.length > 1 &&
					this.isEmptyDelete == true
				) {
					this.currentPageBlocks.splice(index, 1);
					setTimeout(() => {
						lastInput.focus();
					}, 300);
				}
			}
			if (currInput.value == "") {
				this.isEmptyDelete = true;
			} else {
				this.isEmptyDelete = false;
			}
		}
	},
	computed: {
		currentPageBlocks() {
			return this.$store.state.currentPageBlocks;
		}
	}
};


*/
</script>
<template>
  <div class="Heading1">
    <input type="textarea" autosize placeholder="Heading 1" />
  </div>
</template>
<style scoped></style>
