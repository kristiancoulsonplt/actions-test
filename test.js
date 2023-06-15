// create a regex that matches a branch name which accepts the following:
// task/bbt-1234
// release/1.0.0
// revert-task-bbt-1234
// feat/bbt-1234

const regex = /(([a-z])\/((bbt-\d+)|(\d+\.\d+\.\d+))|((revert|chore).+))(.+)?/;

const testBranchNames = [
  "task/bbt-1234",
  "release/12.1.1",
  "revert-task-bbt-1234",
  "feat/bbt-1234",
  "fix/bbt-1234",
  "release/12.200.100",
  "chore-something",
  "test/bbt-1234-b",
  "TASK/bbt-1234",
];

console.log(`
TESTING BRANCH NAMES
`);
testBranchNames.forEach((branchName) => {
  const match = branchName.match(regex);
  console.log(match ? `Matched: ${branchName}` : `No match: ${branchName}`);
});
