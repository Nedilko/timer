import { render, screen } from "@testing-library/react";
import Countdown from "../Countdown";

describe("Countdown", () => {
const handleFinish = jest.fn();
const targetDate = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
}

beforeEach(()=>{
    handleFinish.mockClear()
})

  it("should match snapshot", () => {
    render(<Countdown targetDate={targetDate} handleFinish={handleFinish}/>)

    expect(screen.getByRole("countdown")).toMatchSnapshot()
  });
  it("should handleFinish", () => {
    render(<Countdown targetDate={targetDate} handleFinish={handleFinish}/>)



  });
  it("targetDate", () => {});
});