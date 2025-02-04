import { useActionState } from "react";

async function increment(previousState, formData) {
  console.log('prevState:',previousState, "and the formData is:",formData)
  return previousState + 1;
}

function StatefulForm({}) {
  const [state, formAction] = useActionState(increment, 0);
  console.log(`The state is ${state} and the from action is: ${formAction}`)
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  )
}