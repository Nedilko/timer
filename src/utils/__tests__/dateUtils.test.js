import { calcDateDuration } from "../dateUtils";
import dayjs from "dayjs";

describe("dateUtils", () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2000-01-01 00:00:00"));

    jest.spyOn(Date.prototype, "getTimezoneOffset").mockImplementation(() => 0);
  });

  afterAll(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  describe("duration should be one day", () => {
    const targetDate = {
      days: 7, // 7 - Sunday since 2000-01-01 is Saturday
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    const duration = {
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    it("should calculate duration", () => {
      expect(calcDateDuration(targetDate)).toEqual(duration);
    });
  });

  describe("duration should be one hour", () => {
    const targetDate = {
      days: 6, // 6 - Saturday 2000-01-01 00:00
      hours: 1,
      minutes: 0,
      seconds: 0,
    };

    const duration = {
      days: 0,
      hours: 1,
      minutes: 0,
      seconds: 0,
    };

    it("should calculate duration", () => {
      expect(calcDateDuration(targetDate)).toEqual(duration);
    });
  });

});
