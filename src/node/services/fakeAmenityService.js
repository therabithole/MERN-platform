export const amenities = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Free Parking" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Free Breakfast" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Meeting Rooms" }
];

export function getAmenities() {
  return amenities.filter(g => g);
}
