import * as notificationData from "../../../../notifications.json";

export default function getAllNotificationsByUser(userId) {
  return notificationData.default
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}