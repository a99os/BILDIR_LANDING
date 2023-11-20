import en from "./lang/en";
import uz from "./lang/uz";
import ru from "./lang/ru";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    uz,
    en,
    ru,
  },
}));
