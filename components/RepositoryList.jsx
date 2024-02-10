import { FlatList, View, StyleSheet, Text, Image } from "react-native";

const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
  },
];

const ItemSeparator = () => <View style={{ borderBottom: "1px solid lightgray" }} />;

const RepositoryList = () => {
  const formatNumber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + "k";
    } else {
      return number.toString();
    }
  };

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 16,
            alignItems: "center",
            gap: 16,
          }}
        >
          <Image source={{ uri: item.ownerAvatarUrl }} style={{ width: 50, height: 50 }} />
          <View style={{}}>
            <Text>Full name: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <View>
              <Text>{item.language}</Text>
            </View>
            <Text>Stars: {formatNumber(item.stargazersCount)}</Text>
            <Text>Forks: {formatNumber(item.forksCount)}</Text>
            <Text>Reviews: {formatNumber(item.reviewCount)}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default RepositoryList;
