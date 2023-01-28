import agent from "../../../agent";
import placeholder from "../../../imgs/placeholder.png";

export async function getItemAndComments(id) {
  const item = await agent.Items.get(id);
  const comments = await agent.Comments.forItem(id);

  return [item, comments];
}

export const showItemImage = (image) => (image === "" ? placeholder : image);
